import { ItemProduto } from './item-produto';
export class Estoque {
    id:number;
    item:ItemProduto;
    quantidadeProduto:number;
    dataEntrada:Date;
    dataVenda:Date;
    fonecedor:string;

}
