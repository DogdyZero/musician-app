import { Bandeira } from './bandeira.enum';
import { Status } from './status.enum';

export class Cartao {
    type:string;
    id:number;
    nomeCartao:string;
    numeroCartao:string;
    validade:string;
    codSeguranca:number;
    bandeira:Bandeira;
    preferencial:Boolean;
    status:Status; 
}
