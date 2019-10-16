import { UsuariosService } from './../../services/usuarios.service';
import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Pessoa } from '../../model/pessoa';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoasService } from '../../services/pessoas.service';

@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html',
  styleUrls: ['./edit-usuario.component.css']
})
export class EditUsuarioComponent implements OnInit {
  pessoa:Pessoa;
  idPessoa:number;
  items: MenuItem[];
  activeItem: MenuItem;
  id=0;
  tela:boolean=false;
  spinner:boolean=true;
  constructor(private activatedRoute :ActivatedRoute,
              private usuariosService:UsuariosService,
              private router:Router,
              private pessoasService:PessoasService) { }

  ngOnInit() {
    let logado = this.usuariosService.logado;
    if(logado == false){
      this.router.navigate(['/fazer_login']);
    }
    this.activatedRoute.params.subscribe(
      (params:any)=>{
        this.idPessoa = params['id'];
      }
    )
    this.pessoasService.getPessoa(this.idPessoa).subscribe(
      (data)=>{
        this.pessoa =data;
        this.tela=true;
        this.spinner=false;
      }
    )

    this.items = [
      {label: 'Dados gerais', icon: 'pi pi-user-edit',
      command: (data)=>{
        this.id=0;
      }},
      {label: 'Cartões', icon: 'pi pi-id-card',
      command: (data)=>{
        this.id=1;
      }},
      {label: 'Endereços', icon: 'pi pi-shopping-cart',
      command: (data)=>{
        this.id=2;
      }},
      {label: 'Telefones', icon: 'pi pi-home',
      command: (data)=>{
        this.id=3;
      }}
      ];

    this.activeItem = this.items[0];
  }

}
