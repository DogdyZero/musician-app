import { CarrinhoCompra } from './carrinho';
import { StatusPedido } from './status-pedido.enum';
import { Frete } from './frete';
import { Pagamento } from './pagamento';

export class Pedido {
    id: number;
    carrinhoCompra:CarrinhoCompra;
    frete: Frete;
    pagamento:Pagamento;
    data: Date;
    total:number;
    statusPedido: StatusPedido;
}
