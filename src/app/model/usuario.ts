import { Perfil } from './perfil.enum';
import { Status } from './status.enum';

export class Usuario {
    id: number;
    status: Status;
    login: string;
    senha: string;
    perfil: Perfil;

}
