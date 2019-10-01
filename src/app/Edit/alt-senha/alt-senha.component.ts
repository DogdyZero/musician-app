import { Pessoa } from '../../model/pessoa';
import { Component, OnInit, Input } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from '../../model/usuario';

@Component({
  selector: 'app-alt-senha',
  templateUrl: './alt-senha.component.html',
  styleUrls: ['./alt-senha.component.css']
})
export class AltSenhaComponent implements OnInit {
  @Input() pessoa:Pessoa;
  constructor(private usuarioSevice:UsuariosService) { }
  alterarSenha(senhaAntiga:string, senha:string, senhaRepetida:string){
    if(senha==senhaRepetida){
      let usuario:Usuario = this.usuarioSevice.getUsuario();
      console.log(usuario)
      if(usuario!=null){
        if(usuario.senha==senhaAntiga){
          usuario.senha = senha;
          usuario.pessoa.id = 2;
          this.usuarioSevice.alterarUsuario(usuario, usuario.id).subscribe();
        }
      }
    } else {
      console.log('Senha errada')
    }
  }

  ngOnInit() {
  }

}
