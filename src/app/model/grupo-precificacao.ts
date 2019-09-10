import { ItemProduto } from './item-produto';
import { Frete } from './frete';
export class GrupoPrecificacao {
    id:number;
    custoCompra:number;
    custoOperacional:number;
    margemLucroEstimada:number;
    frete:Frete;
    valorFinalProduto:number;
    item:ItemProduto; 
}
