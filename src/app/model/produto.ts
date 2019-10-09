import { Status } from './status.enum';
import { CategoriaProduto } from './categoria';
import { GrupoPrecificacao } from './grupo-precificacao';

export class Produto {
    id:number;
    ean:string;
    nome:string;
    modelo:string;
    ano:Date;
    marca:String;
    pathImage:string;
    descricao:string;
    categoriaProduto:CategoriaProduto;
    grupoPrecificacao:GrupoPrecificacao;
    status:Status;
    dimensao:string;
    codigoBarrras:string;
    imagemString:string;
}
