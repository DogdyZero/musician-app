import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SelectItem, MenuItem, Message } from 'primeng/api';
import { Usuario } from '../../model/usuario';
import { Pessoa } from '../../model/pessoa';
import { PessoasService } from '../../services/pessoas.service';
import { CalendarioService } from 'src/app/services/calendario.service';

@Component({
  selector: 'app-cad-usuario',
  templateUrl: './cad-usuario.component.html',
  styleUrls: ['./cad-usuario.component.css']
})
export class CadUsuarioComponent implements OnInit {
  constructor(private pessoaService:PessoasService,
    private calendarioService:CalendarioService){}

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
    this.pt = this.calendarioService.getCalendarioPT();
  }

}
