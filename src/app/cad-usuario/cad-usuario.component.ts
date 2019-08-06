import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-cad-usuario',
  templateUrl: './cad-usuario.component.html',
  styleUrls: ['./cad-usuario.component.css']
})
export class CadUsuarioComponent implements OnInit {
  tiposEndereco: SelectItem[];
  tipo: string;

  endereco:any =[{
    cep:null,
    logradouro:null,
    bairro:null,
    localidade:null,
    uf:null
  }];


  buscarCep(cep:any){
    let url = `https://viacep.com.br/ws/${cep}/json/`
    this.http.get(url).subscribe(data=>{
      this.endereco=data;}) 
  }
  constructor(private http:HttpClient) {
    
    }
  
  ngOnInit() {
    this.tiposEndereco = [
      {label: 'Correspondência', value: 'Correspondência'},
      {label: 'Cobrança', value: 'Cobrança'},
      {label: 'Outros', value: 'Outros'}
  ];
  }

}
