import { Bandeira } from './bandeira.enum';
import { Status } from './status.enum';
import { TipoPagamento } from './tipo-pagamento';

export class Cartao extends TipoPagamento{
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
