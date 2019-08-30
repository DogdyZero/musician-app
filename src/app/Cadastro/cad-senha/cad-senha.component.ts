import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Usuario } from '../../model/usuario';
import { Pessoa } from '../../model/pessoa';
import { Message } from 'primeng/api';
import { UsuariosService } from '../../services/usuarios.service';
import { Perfil } from '../../model/perfil.enum';

@Component({
  selector: 'app-cad-senha',
  templateUrl: './cad-senha.component.html',
  styleUrls: ['./cad-senha.component.css']
})
export class CadSenhaComponent implements OnInit {
  constructor(private usuariosService:UsuariosService) { }
  
  @Input() pessoa :Pessoa;
  @Output() update = new EventEmitter();

  @Input() id:number;
  @Output() updateId = new EventEmitter();

  usuario:Usuario = new Usuario();

  msgs: Message[] = [];

  clear() {
    this.msgs = [];
  }
  salvar(senha:string, senhaRepetida:string){
    if(senha==senhaRepetida){
      //this.usuario.id =4;
      this.usuario.senha = senha;
      this.usuario.perfil =Perfil.CLIENTE;
      this.usuario.login = this.pessoa.cpf;
      this.pessoa.usuario = this.usuario;
      this.update.emit(this.pessoa);
      this.updateId.emit(++this.id);
    } else {
      this.msgs = [];
      this.msgs.push({severity:'error', summary:'Erro', detail:'As senhas digitadas não conferem'});
      }
  }

  ngOnInit() {
  }

}
