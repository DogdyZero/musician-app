import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Message } from 'primeng/api';
import { Perfil } from '../../model/perfil.enum';
import { Usuario } from '../../model/usuario';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-cad-senha',
  templateUrl: './cad-senha.component.html',
  styleUrls: ['./cad-senha.component.css']
})
export class CadSenhaComponent implements OnInit {
  constructor(private usuariosService:UsuariosService) { }
  
  @Input() usuario :Usuario;
  @Output() update = new EventEmitter();

  @Input() id:number;
  @Output() updateId = new EventEmitter();

  msgs: Message[] = [];

  clear() {
    this.msgs = [];
  }
  salvar(senha:string, senhaRepetida:string){
    if(senha==senhaRepetida){
      //this.usuario.id =4;
      this.usuario.senha = senha;
      this.usuario.perfil =Perfil.CLIENTE;
      this.usuario.login = this.usuario.pessoa.cpf;
      this.usuario = this.usuario;
      this.update.emit(this.usuario);
      this.updateId.emit(++this.id);
    } else {
      this.msgs = [];
      this.msgs.push({severity:'error', summary:'Erro', detail:'As senhas digitadas não conferem'});
      }
  }

  ngOnInit() {
  }

}
