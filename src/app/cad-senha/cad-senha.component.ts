import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Usuario } from '../model/usuario';
import { Pessoa } from '../model/pessoa';
import { Perfil } from '../model/perfil';

@Component({
  selector: 'app-cad-senha',
  templateUrl: './cad-senha.component.html',
  styleUrls: ['./cad-senha.component.css']
})
export class CadSenhaComponent implements OnInit {
  constructor() { }
  
  @Input() pessoa :Pessoa;
  @Output() update = new EventEmitter();

  @Input() id:number;
  @Output() updateId = new EventEmitter();

  usuario:Usuario = new Usuario();
  perfil:Perfil = new Perfil();
  msg:string;
  salvar(senha:string, senhaRepetida:string){
    if(senha==senhaRepetida){
      this.usuario.senha = senha;
      this.perfil.nome ='cliente';
      this.usuario.perfil = this.perfil;
      this.usuario.login = this.pessoa.cpf;
      this.pessoa.usuario = this.usuario;
      this.update.emit(this.pessoa);
    } else {
      this.msg = 'As senha digitadas não conferem';
    }
  }

  ngOnInit() {
  }

}
