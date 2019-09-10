import { Pagamento } from './pagamento';
import { Pedido } from './pedido';
import { Usuario } from './usuario';
export class Compra {
    id:number;
    usuario:Usuario;
    pedido:Pedido;
    pagamento:Pagamento;
}
