import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import { MemoryPessoa } from '../memoryPessoasDataBase';
import { Pessoa } from '../model/pessoa';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  localizado=false;
  admin=false;
  msg:string;
  memoryBase= MemoryPessoa;
  usuario:Usuario = new Usuario();
  pessoa:Pessoa;

  constructor(private services : LoginService) { }
  logar(usuario:Usuario){
    for(let mem of this.memoryBase){
      if(usuario.login==mem.usuario.login){
        this.localizado=true;
        if(mem.usuario.perfil.nome=='admin'){
          this.admin=true;
        }
        this.pessoa = mem;
      } 
    }
    if(this.localizado==false){
      this.msg='Senha ou usuario invalido';
    }

  }

  ngOnInit() {
  }
    
}
