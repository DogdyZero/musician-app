import { Produto } from './produto';
import { Troca } from './troca';
export class ItemProduto {
    id:number;
    produto:Produto;
    quantidade:number;
    valorProduto:number;
    troca:Troca;
}
