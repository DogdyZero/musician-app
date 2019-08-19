import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Telefone } from '../model/telefone';
import { Pessoa } from '../model/pessoa';

@Component({
  selector: 'app-cad-telefone',
  templateUrl: './cad-telefone.component.html',
  styleUrls: ['./cad-telefone.component.css']
})
export class CadTelefoneComponent implements OnInit {

  constructor() { }
  @Input() pessoa :Pessoa;
  @Output() update = new EventEmitter();

  @Input() id:number;
  @Output() updateId = new EventEmitter();

  telefone:Telefone = new Telefone();

  telefones :Telefone[] = [];
  
  salvar(telefone:Telefone){  
    this.telefones.push(telefone);
    this.pessoa.telefone = this.telefones;
    this.update.emit(this.pessoa);
    this.updateId.emit(++this.id);
  }

  ngOnInit() {
  }

}
