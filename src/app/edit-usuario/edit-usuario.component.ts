import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html',
  styleUrls: ['./edit-usuario.component.css']
})
export class EditUsuarioComponent implements OnInit {

  items: MenuItem[];
  activeItem: MenuItem;
  id=0;
  constructor() { }

  ngOnInit() {

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
