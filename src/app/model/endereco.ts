import { Status } from './status.enum';
export class Endereco {
    id:number;
    cep:string;
    tipoLogradouro:string;
    apelidoEndereco:String;
    logradouro:string;
    numero:number;
    complemento:string;
    bairro:string;
    cidade:string;
    estado:string;
    status:Status;
}
