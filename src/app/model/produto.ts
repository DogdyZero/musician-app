import { Status } from './status.enum';
import { CategoriaProduto } from './categoria';

export class Produto {
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
    categoriaProduto:CategoriaProduto;
    status:Status;
    dimensao:string;
    codigoBarrras:string;
    imagemString:string;
    arquivo:File;
}
