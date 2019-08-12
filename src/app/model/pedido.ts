import { Instrumento } from './instrumento';
import { Pessoa } from './pessoa';

export class Pedido {
    id: number;
    cliente: Pessoa;
    produto: Instrumento[];
    frete: number;
    valor: number;
    data: Date;
}
