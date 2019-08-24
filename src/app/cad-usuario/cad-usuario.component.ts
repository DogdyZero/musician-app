import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {SelectItem, MenuItem} from 'primeng/api';
import { Usuario } from '../model/usuario';
import { Pessoa } from '../model/pessoa';
import { PessoasService } from '../services/pessoas.service';

@Component({
  selector: 'app-cad-usuario',
  templateUrl: './cad-usuario.component.html',
  styleUrls: ['./cad-usuario.component.css']
})
export class CadUsuarioComponent implements OnInit {
  constructor(private pessoaService:PessoasService){}

  @Input() pessoa :Pessoa;
  @Output() update = new EventEmitter();

  @Input() id:number;
  @Output() updateId = new EventEmitter();

  salvar(pessoa:Pessoa){
    this.update.emit(this.pessoa);
    this.updateId.emit(++this.id);
  }

 
  ngOnInit() {
  }

}
