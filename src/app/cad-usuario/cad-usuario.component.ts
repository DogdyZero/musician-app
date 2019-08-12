import { Component, OnInit, Input } from '@angular/core';
import {SelectItem, MenuItem} from 'primeng/api';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-cad-usuario',
  templateUrl: './cad-usuario.component.html',
  styleUrls: ['./cad-usuario.component.css']
})
export class CadUsuarioComponent implements OnInit {
  @Input() id: number;
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
