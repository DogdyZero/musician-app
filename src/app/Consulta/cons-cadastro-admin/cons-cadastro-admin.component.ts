import { PessoasService } from '../../services/pessoas.service';
import { Pessoa } from '../../model/pessoa';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-cons-cadastro-admin',
  templateUrl: './cons-cadastro-admin.component.html',
  styleUrls: ['./cons-cadastro-admin.component.css']
})
export class ConsCadastroAdminComponent implements OnInit, OnDestroy{
  pessoa: Pessoa[] = [];
  tipoPesquisa: SelectItem[];
  tipo: string;
  inscricao:Subscription;
  
  constructor(private pessoaService:PessoasService,private router:Router) { }

  ngOnInit() {
    this.inscricao = this.pessoaService.getPessoas().subscribe(
      (data)=>{
        this.pessoa=data;
      }
    );
    this.tipoPesquisa = [
      {label: 'cpf', value: 'cpf'},
      {label: 'id', value: 'id'},
      {label: 'nome', value: 'nome'}
    ];
  }

  buscar(parametro :string){
    if(this.tipo!=undefined && this.tipo != undefined && 
      parametro!=undefined && parametro !=''){
      let tipoConsulta = this.tipo;
      this.efetuarConsulta(tipoConsulta,parametro);
    }
  }
  efetuarConsulta(tipo: string, parametro:string){
    if(tipo === 'cpf'){
      this.pessoaService.buscarPessoaCpf(parametro).subscribe(data=>{
        this.pessoa = new Array();
        this.pessoa = data;
      });
    } else if (tipo === 'nome'){
      this.pessoaService.buscarPessoaPorNome(parametro).subscribe(data=>{
        this.pessoa = new Array();
        this.pessoa = data;
      });
    } else if (tipo === 'id'){
      this.pessoaService.getPessoa(parseInt(parametro)).subscribe(data=>{
        this.pessoa = new Array();
        this.pessoa.push(data);
      });
    } else {
      return null;
    }
  }
  ngOnDestroy(){
    this.inscricao.unsubscribe(); 
  }  

  // async consultarId(id:number){
  //   if(id.toString().length == 0){
  //      this.pessoaService.getPessoas().subscribe(
  //       (data)=>{
  //         this.pessoa=data;
  //       }
  //     );
  //   }else {
  //     this.pessoaService.getPessoa(id).subscribe(
  //     (data)=>{
  //       this.pessoa = [];
  //       this.pessoa.push(data);
  //     }
  //   );
  //    }
  // }
  async deletar(id:number){
    this.pessoaService.deletarPessoa(id).subscribe();
    window.location.reload();
  }

}
