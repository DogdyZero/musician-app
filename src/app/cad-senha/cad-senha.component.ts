import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../model/usuario';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-cad-senha',
  templateUrl: './cad-senha.component.html',
  styleUrls: ['./cad-senha.component.css']
})
export class CadSenhaComponent implements OnInit {
  items: MenuItem[];

  @Input() usuario :Usuario;

  constructor() { }
  salvar(usuario:Usuario){
    console.log(usuario);
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
