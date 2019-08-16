import { Component, OnInit, Input } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Pessoa } from '../model/pessoa';
import { PessoaService } from './pessoa.service';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../login/login.service';

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

  constructor(
    private pessoaService:PessoaService,
    private activatedRoute :ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params:any)=>{
        this.idPessoa = params['id'];
      }
    )
    this.pessoaService.setPessoa(this.idPessoa);
    this.pessoa = this.pessoaService.getPessoa();

      this.items = [
          {label: 'Meus Dados', icon: 'pi pi-user',
          command: (data)=>{
            this.id=0;
          }},
          {label: 'Endereços', icon: 'pi pi-briefcase',
          command: (data)=>{
            this.id=1;
          }},
          {label: 'Cartões', icon: 'pi pi-dollar',
          command: (data)=>{
            this.id=2;
          }},
          {label: 'Pedidos', icon: 'pi pi-globe',
          command: (data)=>{
            this.id=3;
          }},
          {label: 'Cupons disponíveis', icon: 'pi pi-money-bill',
          command: (data)=>{
            this.id=4;
          }},
          {label: 'Senha', icon: 'pi pi-unlock',
          command: (data)=>{
            this.id=5;
          }}
          
      ];
      this.activeItem = this.items[0];

  }
}
