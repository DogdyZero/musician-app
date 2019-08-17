import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {SelectItem, MenuItem} from 'primeng/api';
import { Pessoa } from '../model/pessoa';
import { Cartao } from '../model/cartao';

@Component({
  selector: 'app-cad-cartao',
  templateUrl: './cad-cartao.component.html',
  styleUrls: ['./cad-cartao.component.css']
})
export class CadCartaoComponent implements OnInit {
  constructor() { }

  @Input() pessoa :Pessoa;
  @Output() update = new EventEmitter();

  @Input() id:number;
  @Output() updateId = new EventEmitter();

  cartao: Cartao = new Cartao();
  cartoes:Cartao[] = [];
  items: MenuItem[];

  tipoBandeira: SelectItem[];
  selectedType: string;
  selectedTypes: string[] = ['Elo', 'MasterCard'];

  salvar(cartao:Cartao){
    this.cartao.bandeira=this.selectedType;
    this.cartao = cartao;
    this.cartoes.push(this.cartao);
    this.pessoa.cartao = this.cartoes;

    this.update.emit(this.pessoa);
    this.updateId.emit(++this.id);
  }

  ngOnInit() {
    this.tipoBandeira = [
      {label: 'Elo', value: 'Elo'},
      {label: 'Visa', value: 'Visa'},
      {label: 'MasterCard', value: 'MasterCard'}
    ];
  }

}
