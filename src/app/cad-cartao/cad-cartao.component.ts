import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {SelectItem, MenuItem} from 'primeng/api';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-cad-cartao',
  templateUrl: './cad-cartao.component.html',
  styleUrls: ['./cad-cartao.component.css']
})
export class CadCartaoComponent implements OnInit {
  @Input() usuario :Usuario;
  @Output() updateUsuario = new EventEmitter();

  @Input() id:number;
  @Output() updateId = new EventEmitter();

  items: MenuItem[];

  tipoBandeira: SelectItem[];
  selectedType: string;
  selectedTypes: string[] = ['Elo', 'MasterCard'];

  cadastro=false;
  salvar(usuario:Usuario){
    this.updateUsuario.emit(this.usuario);
    this.updateId.emit(++this.id);
  }
  constructor() { }

  ngOnInit() {
    this.tipoBandeira = [
      {label: 'Elo', value: 'Elo'},
      {label: 'Visa', value: 'Visa'},
      {label: 'MasterCard', value: 'MasterCard'}
    ];
    this.items = [
      {label: 'Dados Pessoais'},
      {label: 'Endereços'},
      {label: 'Cartões'},
      {label: 'Senha'}
    ];
  }

}
