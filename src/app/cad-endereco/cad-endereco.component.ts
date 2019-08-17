import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';
import {SelectItem, MenuItem} from 'primeng/api';
import { Usuario } from '../model/usuario';
import { HttpClient } from '@angular/common/http';
import { Endereco } from '../model/endereco';
import { Pessoa } from '../model/pessoa';

@Component({
  selector: 'app-cad-endereco',
  templateUrl: './cad-endereco.component.html',
  styleUrls: ['./cad-endereco.component.css']
})
export class CadEnderecoComponent implements OnInit {
  constructor(private http:HttpClient) {}  
  
  @Input() pessoa :Pessoa;
  @Output() update = new EventEmitter();

  @Input() id:number;
  @Output() updateId = new EventEmitter();

  tiposEndereco: SelectItem[];
  tipo: string;

  endereco:Endereco =new Endereco();
  enderecos:Endereco[]=[];

  enderecoCorreios:any ={
    cep:null,
    logradouro:null,
    bairro:null,
    localidade:null,
    uf:null
  };

  buscarCep(cep:any){
    let url = `https://viacep.com.br/ws/${cep}/json/`
    this.http.get(url).subscribe(data=>{
      this.enderecoCorreios=data;}) 
  }
  
  salvar(endereco:Endereco){   
    if(endereco.bairro==null){
      endereco.bairro = this.enderecoCorreios.bairro;
      endereco.cidade = this.enderecoCorreios.cidade;
      endereco.estado = this.enderecoCorreios.uf;
    }
    endereco.tipoLogradouro=this.tipo;
    this.enderecos.push(endereco);
    this.pessoa.endereco = this.enderecos;
    this.update.emit(this.pessoa);
    this.updateId.emit(++this.id);
  }

  ngOnInit() {
    this.tiposEndereco = [
      {label: 'Correspondência', value: 'Correspondência'},
      {label: 'Cobrança', value: 'Cobrança'},
      {label: 'Outros', value: 'Outros'}
    ];
  }

}
