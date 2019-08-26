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

  generos:SelectItem[];

  genero:string;

  salvar(pessoa:Pessoa){
    this.update.emit(this.pessoa);
    this.updateId.emit(++this.id);
  }

  en:any;
 
  ngOnInit() {
    this.generos = [
      {label: 'feminino', value: 'feminino'},
      {label: 'masculino', value: 'masculino'}
    ];
    this.en = {
      firstDayOfWeek: 1,
      dayNames: [ "domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
      dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
      dayNamesMin: [ "D","L","M","X","J","V","S" ],
      monthNames: [ "enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre" ],
      monthNamesShort: [ "ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic" ],
      today: 'Hoy',
      clear: 'Borrar'
  };
  }

}
