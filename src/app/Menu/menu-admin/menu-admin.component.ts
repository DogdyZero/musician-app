import { Router } from '@angular/router';
import { UsuariosService } from './../../services/usuarios.service';
import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Pessoa } from '../../model/pessoa';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent implements OnInit {
  items: MenuItem[];
  activeItem: MenuItem;
  id=0;
  //pessoa = MemoryPessoa;
  constructor(
    private usuariosService:UsuariosService,
    private router:Router
  ) { }

  ngOnInit() {
      this.items = [
        {label: 'Dashboard', icon : 'pi pi-shopping-cart',
          command:(data)=>{
            this.id=0;
          }},
        {label: 'Produtos', icon : 'pi pi-money-bill',
          command:(data)=>{
            this.id=1;
          }},
          {label: 'Usuarios / Clientes', icon: 'pi pi-user',
          command: (data)=>{
            this.id=2;
          }},
          {label: 'Pedidos', icon: 'pi pi-globe',
          command: (data)=>{
            this.id=3;
          }},
          {label: 'Trocas', icon: 'pi pi-undo',
          command: (data)=>{
            this.id=4;
          }}
      ];
      this.activeItem = this.items[0];

  }


}
