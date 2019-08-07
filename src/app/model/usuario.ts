import { Telefone } from './telefone';
import { Endereco } from './endereco'

export class Usuario {
    id:number;
    nome:string;
    cpf:string;
    telefone: Telefone[];
    endereco:Endereco[];
}
