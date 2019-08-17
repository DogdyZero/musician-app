import { Component, OnInit, Input, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-menu-cadastro',
  templateUrl: './menu-cadastro.component.html',
  styleUrls: ['./menu-cadastro.component.css']
})
export class MenuCadastroComponent implements OnInit {
  items: MenuItem[];
  usuario: Usuario =new Usuario();
  id=0;
  activeIndex: number;

  updateUser(event){
    console.log(event);
  }
  ngOnChange(){
    console.log(this.id);
  }
  updateId(event){
    this.id=event;
  }

  constructor() { }

  continue(){
    if(this.id<3){
      this.id++;
    }
  }
  voltar(){
    if(this.id>0){
      this.id--;
    }
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
