import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {SelectItem, MenuItem} from 'primeng/api';
import { Usuario } from '../model/usuario';
import { Pessoa } from '../model/pessoa';

@Component({
  selector: 'app-cad-usuario',
  templateUrl: './cad-usuario.component.html',
  styleUrls: ['./cad-usuario.component.css']
})
export class CadUsuarioComponent implements OnInit {
  constructor(){}

  @Input() pessoa :Pessoa;
  @Output() update = new EventEmitter();

  @Input() id:number;
  @Output() updateId = new EventEmitter();

  salvar(usuario:Usuario){
    this.update.emit(this.pessoa);
    this.updateId.emit(++this.id);
  }

 
  ngOnInit() {
  }

}
