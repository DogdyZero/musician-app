import { Bandeira } from './bandeira.enum';

export class Cartao {
    id:number;
    nomeCartao:string;
    numeroCartao:string;
    validade:string;
    codSeguranca:number;
    bandeira:Bandeira;
}
