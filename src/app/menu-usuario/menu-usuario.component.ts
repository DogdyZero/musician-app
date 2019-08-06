import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu-usuario',
  templateUrl: './menu-usuario.component.html',
  styleUrls: ['./menu-usuario.component.css']
})
export class MenuUsuarioComponent implements OnInit {
  items: MenuItem[];

  activeItem: MenuItem;

  constructor() { }

  ngOnInit() {
      this.items = [
          {label: 'Meus Dados', icon: 'pi pi-user'},
          {label: 'Endereços', icon: 'pi pi-briefcase'},
          {label: 'Cartões', icon: 'pi pi-dollar'},
          {label: 'Pedidos', icon: 'pi pi-globe'},
      ];
      this.activeItem = this.items[0];

  }
}
