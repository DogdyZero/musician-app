import { Pessoa } from './pessoa';
import { Perfil } from './perfil.enum';
import { Status } from './status.enum';

export class Usuario {
    id: number;
    perfil: Perfil;
    login: string;
    hashCode:string;
    senha: string;
    status: Status;
    pessoa:Pessoa;

}
