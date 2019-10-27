import { CarrinhoCompra } from './carrinho';
import { StatusPedido } from './status-pedido.enum';
import { Frete } from './frete';
import { Pagamento } from './pagamento';

export class Pedido {
    id: number;
    // cliente: Pessoa;
    carrinhoCompra:CarrinhoCompra;
    frete: Frete;
    pagamento:Pagamento;
    // total: number;
    data: Date;
    total:number;
    statusPedido: StatusPedido;
}
