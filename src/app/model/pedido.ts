import { Instrumento } from './instrumento';
import { Pessoa } from './pessoa';

export class Pedido {
    id: number;
    cliente: Pessoa;
    produto: Instrumento[];
    frete: number;
    total: number;
    data: Date;
    status: string;
}
