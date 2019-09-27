import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {SelectItem, MenuItem} from 'primeng/api';
import { Usuario } from '../../model/usuario';
import { Pessoa } from '../../model/pessoa';
import { PessoasService } from '../../services/pessoas.service';

@Component({
  selector: 'app-cad-usuario',
  templateUrl: './cad-usuario.component.html',
  styleUrls: ['./cad-usuario.component.css']
})
export class CadUsuarioComponent implements OnInit {
  constructor(private pessoaService:PessoasService){}

  @Input() usuario :Usuario;
  @Output() update = new EventEmitter();

  @Input() id:number;
  @Output() updateId = new EventEmitter();

  pessoa:Pessoa = new Pessoa();

  generos:SelectItem[];
  data:Date;
  genero:string;

  salvar(pessoa:Pessoa){
    console.log(this.data)
    pessoa.dataAniversario =this.data;
    pessoa.genero=this.genero;
    this.usuario.pessoa = pessoa;
    this.update.emit(this.usuario);
    this.updateId.emit(++this.id);
  }

  pt:any;
 
  ngOnInit() {
    this.generos = [
      {label: 'feminino', value: 'feminino'},
      {label: 'masculino', value: 'masculino'}
    ];
    this.pt = {
      firstDayOfWeek: 1,
      dayNames: [ "domingo","segunda","terça","quarta","quinta","sexta","sábado" ],
      dayNamesShort: [ "dom","seg","ter","qua","qui","sex","sáb" ],
      dayNamesMin: [ "D","S","T","Q","Q","S","S" ],
      monthNames: [ "janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembr" ],
      monthNamesShort: [ "jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez" ],
      today: 'Hoje',
      clear: 'Limpar'
  };
  }

}
