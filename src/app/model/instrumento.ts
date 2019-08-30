import { CategoriaInstrumento } from './categoria-instrumento';
import { Marca } from './marca';

export class Instrumento {
    id:number;
    nome:string;
    modelo:string;
    linha:string;
    ano:string;
    preco:number;
    precoCusto:number;
    tipo:CategoriaInstrumento;
    marca:Marca;
    pathImage:string;
    descricao:string;
    quantidade:number;
}
