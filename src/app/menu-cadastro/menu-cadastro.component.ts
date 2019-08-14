import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-menu-cadastro',
  templateUrl: './menu-cadastro.component.html',
  styleUrls: ['./menu-cadastro.component.css']
})
export class MenuCadastroComponent implements OnInit {
  items: MenuItem[];
  @Input() usuario: Usuario;
  id=0;
  activeIndex: number =this.id;
  constructor() { }

  change(index: number): void {
    this.id++;
  }

  ngOnInit() {
    this.items = [
      {label: 'Dados Pessoais',
      command:(data)=>{
        this.id=0;
      }},
      {label: 'Endereços',
      command:(data)=>{
        this.id=1;
      }},
      {label: 'Cartões',
      command:(data)=>{
        this.id=2;
      }},
      {label: 'Senha',
      command:(data)=>{
        this.id=3;
      }}
    ];
  }

}
