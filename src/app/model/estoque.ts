import { Produto } from './produto';
export class Estoque {
    id:number;
    produto:Produto;
    quantidadeProduto:number;
    dataEntrada:Date;
    dataVenda:Date;
    fonecedor:string;

}
