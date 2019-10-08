import { Compra } from './compra';
import { Troca } from './troca';
import { Cupom } from './cupom';
import { Pedido } from './pedido';
import { Telefone } from './telefone';
import { Endereco } from './endereco';
import { Cartao } from './cartao';

export class Pessoa {
    id:number;
    nome:string;
    cpf:string;
    rg:string;
    genero:string;
    dataAniversario:Date;
    email:string;
    telefone: Telefone[];
    cartao:Cartao[];
    endereco:Endereco[];
    pedido:Pedido[];
    cupom:Cupom[];
}
