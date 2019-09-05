import { Status } from './status.enum';
import { Pedido } from './pedido';
import { CategoriaInstrumento } from './categoria-instrumento';

export class Instrumento {
    id:number;
    preco:number;
    ean:string;
    nome:string;
    modelo:string;
    ano:Date;
    marca:String;
    pathImage:string;
    descricao:string;
    quantidade:number;
    pedido:Pedido;
    categoriaProduto:CategoriaInstrumento;
    status:Status;
    dimensao:string;
    codigoBarrras:string;
}
