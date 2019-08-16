import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import { MemoryPessoa } from '../memoryPessoasDataBase';
import { Pessoa } from '../model/pessoa';
import { LoginService } from './login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msg:string;
  usuario:Usuario = new Usuario();

  constructor(private router:Router,
    private services : LoginService) { }

  logar(usuario:Usuario){
    let resultado = this.services.getLogin(usuario);
    if(resultado == 'admin'){
      this.router.navigate(['/admin']);
    } else if (resultado == 'cliente'){
      this.router.navigate(['/cart']);
    } else{
      this.msg =resultado;
    }
  }

  ngOnInit() {
  }
    
}
