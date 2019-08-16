import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';
import { MemoryPessoa } from '../memoryPessoasDataBase';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  usuario:Usuario;

  getLogin(usuario : Usuario){
    for(let mem of MemoryPessoa){
      if(usuario.login==mem.usuario.login){
        this.usuario =mem.usuario;
        if(mem.usuario.perfil.nome=='admin'){
          return 'admin';
        } else if(mem.usuario.perfil.nome=='cliente'){
          return 'cliente';
        } else {
          return 'Usuario não localizado';
        }
      }
    } 
  }

  getUser(){
    if(this.usuario==null){
      return null;
    } else{
      return this.usuario;
    }
  }
  logout(){
    this.usuario = null;
  }

}
