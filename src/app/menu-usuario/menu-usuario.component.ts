import { Component, OnInit, Input } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Pessoa } from '../model/pessoa';
import { PessoaService } from './pessoa.service';
import { ActivatedRoute } from '@angular/router';
import { PessoasService } from '../services/pessoas.service';

@Component({
  selector: 'app-menu-usuario',
  templateUrl: './menu-usuario.component.html',
  styleUrls: ['./menu-usuario.component.css']
})
export class MenuUsuarioComponent implements OnInit {
  items: MenuItem[];
  pessoa:Pessoa;
  activeItem: MenuItem;
  id=0;
  idPessoa:number;
  mostrarTela=false;
  mostrarSpinner=true;

  constructor(
    private activatedRoute :ActivatedRoute,
    private pessoasService:PessoasService){}

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params:any)=>{
        this.idPessoa = params['id'];
      }
    )
    this.pessoasService.getPessoa(this.idPessoa).subscribe(
      (data)=>{
        console.log(data);
        this.pessoa =data;

        this.mostrarSpinner=false;
        this.mostrarTela=true;
        console.log(this.pessoa);
      }
    )


    //this.pessoaService.setPessoa(this.idPessoa);
    //this.pessoa = this.pessoaService.getPessoa();

    this.items = [
        {label: 'Meus Dados', icon: 'pi pi-user',
        command: (data)=>{
          this.id=0;
        }},
        {label: 'Pedidos', icon: 'pi pi-globe',
        command: (data)=>{
          this.id=1;
        }},
        {label: 'Cupons disponíveis', icon: 'pi pi-money-bill',
        command: (data)=>{
          this.id=2;
        }},
        {label: 'Senha', icon: 'pi pi-unlock',
        command: (data)=>{
          this.id=3;
        }}
        
    ];
      this.activeItem = this.items[0];

  }
}
