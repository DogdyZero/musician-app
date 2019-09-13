import { StatusPedido } from './status-pedido.enum';
import { ItemProduto } from './item-produto';
import { Instrumento } from './instrumento';
import { Pessoa } from './pessoa';

export class Pedido {
    id: number;
    cliente: Pessoa;
    itemProduto:ItemProduto[];
    frete: number;
    total: number;
    data: Date;
    status: StatusPedido;
}
