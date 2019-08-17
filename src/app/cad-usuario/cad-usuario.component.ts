import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {SelectItem, MenuItem} from 'primeng/api';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-cad-usuario',
  templateUrl: './cad-usuario.component.html',
  styleUrls: ['./cad-usuario.component.css']
})
export class CadUsuarioComponent implements OnInit {
  @Input() usuario :Usuario;
  @Output() updateUsuario = new EventEmitter();

  @Input() id:number;
  @Output() updateId = new EventEmitter();

  salvar(usuario:Usuario){
    this.updateUsuario.emit(this.usuario);
    this.updateId.emit(++this.id);
  }
  items: MenuItem[];
  cadastro=false;

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
