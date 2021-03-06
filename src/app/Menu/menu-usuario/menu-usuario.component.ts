import { UsuariosService } from './../../services/usuarios.service';
import { Component, OnInit, Input } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Pessoa } from '../../model/pessoa';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoasService } from '../../services/pessoas.service';

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
    private usuariosService:UsuariosService,
    private router:Router,
    private pessoasService:PessoasService){}

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
        console.log(data);
        this.pessoa =data;

        this.mostrarSpinner=false;
        this.mostrarTela=true;
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
