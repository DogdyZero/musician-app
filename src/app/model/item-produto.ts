import { Produto } from './produto';
import { Statusitem } from './status-item.enum';
export class ItemProduto {
    id:number;
    produto:Produto;
    quantidade:number;
    valorProduto:number;
    statusItem:Statusitem;
}
