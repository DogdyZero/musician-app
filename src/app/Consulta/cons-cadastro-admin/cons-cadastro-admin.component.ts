import { PessoasService } from '../../services/pessoas.service';
import { Pessoa } from '../../model/pessoa';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cons-cadastro-admin',
  templateUrl: './cons-cadastro-admin.component.html',
  styleUrls: ['./cons-cadastro-admin.component.css']
})
export class ConsCadastroAdminComponent implements OnInit {
  pessoa: Pessoa[] = [];

  
  constructor(private pessoaService:PessoasService,private router:Router) { }

  ngOnInit() {
    this.pessoaService.getPessoas().subscribe(
      (data)=>{
        this.pessoa=data;
      }
    );
  }

  async consultarId(id:number){
    if(id.toString().length == 0){
       this.pessoaService.getPessoas().subscribe(
        (data)=>{
          this.pessoa=data;
        }
      );
    }else {
      this.pessoaService.getPessoa(id).subscribe(
      (data)=>{
        this.pessoa = [];
        this.pessoa.push(data);
      }
    );
     }
  }
  async deletar(id:number){
    this.pessoaService.deletarPessoa(id).subscribe();
    window.location.reload();
  }

}
