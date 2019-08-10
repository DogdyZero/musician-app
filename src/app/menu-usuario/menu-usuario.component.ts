import { Component, OnInit, Input } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Usuario } from '../model/usuario';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-menu-usuario',
  templateUrl: './menu-usuario.component.html',
  styleUrls: ['./menu-usuario.component.css']
})
export class MenuUsuarioComponent implements OnInit {
  items: MenuItem[];
  @Input() usuario:Usuario;
  activeItem: MenuItem;
  id=0;
  teste(){
    console.log('teste');
  }
  constructor() { }

  ngOnInit() {
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
      ];
      this.activeItem = this.items[0];

  }
}
