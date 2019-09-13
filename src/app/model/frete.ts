import { Pedido } from './pedido';
import { Endereco } from './endereco';
export class Frete {
    id:number;
    pedido:Pedido;
    endereco:Endereco;
    calculoFrete:number;
    prazoEntrega:Date;
}
