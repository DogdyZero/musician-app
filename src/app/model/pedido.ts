import { CarrinhoCompra } from './carrinho';
import { StatusPedido } from './status-pedido.enum';
import { Frete } from './frete';

export class Pedido {
    id: number;
    // cliente: Pessoa;
    carrinhoCompra:CarrinhoCompra;
    frete: Frete;
    // total: number;
    // data: Date;
    total:number;
    statusPedido: StatusPedido;
}
