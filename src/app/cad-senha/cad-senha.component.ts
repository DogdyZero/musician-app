import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Usuario } from '../model/usuario';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-cad-senha',
  templateUrl: './cad-senha.component.html',
  styleUrls: ['./cad-senha.component.css']
})
export class CadSenhaComponent implements OnInit {
  @Input() usuario :Usuario;
  @Output() updateUsuario = new EventEmitter();

  @Input() id:number;
  @Output() updateId = new EventEmitter();

  salvar(usuario:Usuario){
    this.updateUsuario.emit(this.usuario);
  }
  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      {label: 'Dados Pessoais'},
      {label: 'Endereços'},
      {label: 'Cartões'},
      {label: 'Senha'}
    ];
  }

}
