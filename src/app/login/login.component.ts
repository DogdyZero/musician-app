import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import { Router } from '@angular/router';
import { CartService } from '../cart/cart.service';
import { Message } from 'primeng/api';
import { UsuariosService } from '../services/usuarios.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msgs: Message[] = [];

  usuario:Usuario = new Usuario();

  constructor(private router:Router,
    private cartService :CartService,
    private usuariosService : UsuariosService) { }

    async logar(usuario:Usuario){
    let resultado = await this.usuariosService.efetuarLogin(usuario);
    if(resultado == 'admin'){
      this.router.navigate(['/admin']);
    } else if (resultado == 'cliente'){
      
      /*if(this.cartService.getTotalInstrumentos()>0){
        this.router.navigate(['/cart']);
      }else {
        this.router.navigate(['/']);
      }
    } else{
      this.msgs = [];
      this.msgs.push({severity:'error', summary:'Atenção', detail:'Login ou senha digitadas estão erradas'});    }*/

    
    }
  }

  ngOnInit() {
  }
    
}
