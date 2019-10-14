import { OrigemCupom } from './origem-cupom.enum';
import { TipoPagamento } from './tipo-pagamento';
import { Status } from './status.enum';

export class Cupom extends TipoPagamento{
    type:string;
    id:number;
    codigo:string;
    origemCupom:OrigemCupom;
    valor:number;
    status:Status;
}
