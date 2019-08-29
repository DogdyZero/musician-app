import { Pedido } from './pedido';
import { Telefone } from './telefone';
import { Endereco } from './endereco';
import { Cartao } from './cartao';
import { Usuario } from './usuario';

export class Pessoa {
    id:number;
    nome:string;
    cpf:string;
    rg:string;
    usuario:Usuario;
    dataNascimento:string;
    telefone: Telefone[];
    endereco:Endereco[];
    cartao:Cartao[];
    genero:String;
    pedido:Pedido[];
}
