import { Telefone } from './telefone';
import { Endereco } from './endereco'
import { Perfil } from './perfil';

export class Usuario {
    id:number;
    login:string;
    senha:string;
    perfil:Perfil;

}
