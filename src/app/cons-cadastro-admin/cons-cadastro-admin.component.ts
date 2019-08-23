import { Component, OnInit } from '@angular/core';
import { MemoryPessoa } from '../memoryPessoasDataBase';
import { Pessoa } from '../model/pessoa';
import { PessoasService } from '../services/pessoas.service';

@Component({
  selector: 'app-cons-cadastro-admin',
  templateUrl: './cons-cadastro-admin.component.html',
  styleUrls: ['./cons-cadastro-admin.component.css']
})
export class ConsCadastroAdminComponent implements OnInit {
  pessoa = MemoryPessoa;
  
  constructor(/*private pessoasService:PessoasService*/) { }

  ngOnInit() {
    /*this.pessoasService.getPessoas().subscribe(
      (data)=>{
        this.pessoa=data;
      }
    );*/
  }

}
