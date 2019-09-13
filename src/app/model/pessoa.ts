import { Compra } from './compra';
import { Troca } from './troca';
import { Cupom } from './cupom';
import { Pedido } from './pedido';
import { Telefone } from './telefone';
import { Endereco } from './endereco';
import { Cartao } from './cartao';
//import { Usuario } from './usuario';

export class Pessoa {
    id:number;
    nome:string;
    cpf:string;
    rg:string;
    //usuario:Usuario;
    dataAniversario:string;
    email:string;
    telefone: Telefone[];
    cartao:Cartao[];
    endereco:Endereco[];
    pedido:Pedido[];
    compra:Compra[];
    cumpom:Cupom[];
    troca:Troca[];
    //genero:String;
}
