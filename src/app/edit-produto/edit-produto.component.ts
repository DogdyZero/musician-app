import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-edit-produto',
  templateUrl: './edit-produto.component.html',
  styleUrls: ['./edit-produto.component.css']
})
export class EditProdutoComponent implements OnInit {

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
      {label: 'Estoque', icon: 'pi pi-desktop',
      command: (data)=>{
        this.id=1;
      }}
      ];

    this.activeItem = this.items[0];
  }

}
