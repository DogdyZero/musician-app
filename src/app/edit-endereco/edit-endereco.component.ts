import { EnderecosService } from './../services/enderecos.service';
import { Component, OnInit, Input } from '@angular/core';
import {SelectItem, MenuItem} from 'primeng/api';
import { Endereco } from '../model/endereco';
import { Pessoa } from '../model/pessoa';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-endereco',
  templateUrl: './edit-endereco.component.html',
  styleUrls: ['./edit-endereco.component.css']
})
export class EditEnderecoComponent implements OnInit {
  @Input() pessoa:Pessoa;
  tiposEndereco: SelectItem[];
  tipo: string;

  constructor(private enderecoService:EnderecosService,private router:Router) { }

  async editEnd(endereco:Endereco){
    //criar uma copia do objeto

    //let copyPessoa:Pessoa = new Pessoa();


      this.enderecoService.alterarEndereco(endereco).subscribe((data)=>{
        this.router.navigate(['/usuario/',this.pessoa.id]);
        console.log(data);
      }, (error) => {
        console.log(error);
      });
    }

  endereco:Endereco =new Endereco();
  enderecos:Endereco[]=[];

  enderecoCorreios:any ={
    cep:null,
    logradouro:null,
    bairro:null,
    localidade:null,
    uf:null
  };
  
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
