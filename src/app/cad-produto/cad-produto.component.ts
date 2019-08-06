import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-cad-produto',
  templateUrl: './cad-produto.component.html',
  styleUrls: ['./cad-produto.component.css']
})
export class CadProdutoComponent implements OnInit {
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
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

}
