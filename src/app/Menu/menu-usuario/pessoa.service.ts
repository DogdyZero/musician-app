import { Pessoa } from './../../model/pessoa';
import { Usuario } from './../../model/usuario';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor() { }

  pessoa:Pessoa;

  /*setPessoa(id:number){
    for(let mem of MemoryPessoa){
      if(mem.usuario.id == id){
        this.pessoa = mem;
      }
    }
  }*/
  /*getPessoa(){
    return this.pessoa;
  }*/
}
