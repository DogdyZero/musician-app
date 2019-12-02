import { StatusItem } from './status-item.enum';

export class Troca {
    id:number;
    dataPedidoTroca:Date;
    dataResposta:Date;
    statusItem:StatusItem;
    descricaoProblema:string;
    resposta:string;
    doIt:boolean;
}
