import { OrigemCupom } from './origem-cupom.enum';
import { TipoPagamento } from './tipo-pagamento';

export class Cupom extends TipoPagamento{
    type:string;
    id:number;
    codigo:string;
    origemCupom:OrigemCupom;
    valor:number;
}
