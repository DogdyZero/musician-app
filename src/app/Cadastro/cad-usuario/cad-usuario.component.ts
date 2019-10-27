import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SelectItem, MenuItem, Message } from 'primeng/api';
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

  val:Boolean = true;
  msgs: Message[] = [];

  generos:SelectItem[];
  data:Date;
  genero:string;

  salvar(pessoa:Pessoa){
    this.msgs=[];
    if(pessoa.nome == null){
      this.val = false;
      console.log("erro no nome");
    }
    if(pessoa.cpf == null || pessoa.cpf.toString().length != 14){
      this.val = false;
      console.log("erro no cpf");
    }
    if(pessoa.rg == null || pessoa.rg.toString().length != 12){
      this.val = false;
      console.log("erro no rg");
    }
    if(this.data == null){
      this.val = false;
      console.log("erro na data");
    }
    if(this.genero == null ){
      this.val = false;
      console.log("erro no genero");
    }

    if(this.val == true){
      pessoa.dataAniversario =this.data;
      pessoa.genero=this.genero;
      console.log(this.pessoa)
      this.usuario.pessoa = pessoa;
      this.update.emit(this.usuario);
      this.updateId.emit(++this.id);
    }else{
      this.msgs.push({severity:'error', summary:'Erro no formulário', detail:'Preencha os campos corretamente!'});
      this.val = true;
    }
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
