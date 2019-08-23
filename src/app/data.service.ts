import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Usuario } from './model/usuario';
import { Pessoa } from './model/pessoa';
import { Telefone } from './model/telefone';
import { Endereco } from './model/endereco';
import { Cartao } from './model/cartao';

@Injectable({
  providedIn: 'root'
})
export class DataService {

   
  constructor() { }
}
