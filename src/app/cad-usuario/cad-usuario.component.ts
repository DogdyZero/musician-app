import { Component, OnInit, Input, Output } from '@angular/core';
import {SelectItem, MenuItem} from 'primeng/api';
import { Usuario } from '../model/usuario';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-cad-usuario',
  templateUrl: './cad-usuario.component.html',
  styleUrls: ['./cad-usuario.component.css']
})
export class CadUsuarioComponent implements OnInit {
  @Input() id: number;
  @Output() novoId = new EventEmitter();

  updateId(){
    this.novoId.emit('teste');
  }

  items: MenuItem[];
  cadastro=false;
  usuario:Usuario = new Usuario();

  constructor(){}
  continue(usuario:Usuario){
    this.cadastro=true;
    this.usuario = usuario;
  }
  ngOnInit() {
    this.items = [
      {label: 'Dados Pessoais'},
      {label: 'Endereços'},
      {label: 'Cartões'},
      {label: 'Senha'}
    ];
  }

}
