import { Cupom } from './cupom';
import { Cartao } from './cartao';
export class FormaPagamento {
    id:number;
    cartao:Cartao[];
    cupom:Cupom[];
    saldo:number;
    pagoTudo:Boolean;
}
