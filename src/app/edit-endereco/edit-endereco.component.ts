import { Component, OnInit } from '@angular/core';
import {SelectItem, MenuItem} from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { Endereco } from '../model/endereco';


@Component({
  selector: 'app-edit-endereco',
  templateUrl: './edit-endereco.component.html',
  styleUrls: ['./edit-endereco.component.css']
})
export class EditEnderecoComponent implements OnInit {

  constructor(private http:HttpClient) { }
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
    }}
    
  ngOnInit() {
    this.tiposEndereco = [
      {label: 'Correspondência', value: 'Correspondência'},
      {label: 'Cobrança', value: 'Cobrança'},
      {label: 'Outros', value: 'Outros'}
    ];
  }

}
