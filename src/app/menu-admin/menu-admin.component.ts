import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Pessoa } from '../model/pessoa';
import { MemoryPessoa } from '../memoryPessoasDataBase';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent implements OnInit {
  items: MenuItem[];
  activeItem: MenuItem;
  id=0;
  pessoa = MemoryPessoa;
  constructor() { }

  ngOnInit() {
      this.items = [
        {label: 'Produtos', icon : 'pi pi-briefcase',
          command:(data)=>{
            this.id=0;
          }},
          {label: 'Usuarios', icon: 'pi pi-user',
          command: (data)=>{
            this.id=1;
          }},
          {label: 'Endereços', icon: 'pi pi-briefcase',
          command: (data)=>{
            this.id=2;
          }},
          {label: 'Cartões', icon: 'pi pi-dollar',
          command: (data)=>{
            this.id=3;
          }},
          {label: 'Pedidos', icon: 'pi pi-globe',
          command: (data)=>{
            this.id=4;
          }},
      ];
      this.activeItem = this.items[0];

  }

}
