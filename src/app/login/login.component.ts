import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  localizado=false;
  msg:string;
  usuario:Usuario = new Usuario();
  usuarios: Usuario[];
  constructor() { }
  logar(usuario:Usuario){
    for(let u of this.usuarios){
      if(usuario.nome==u.nome){
        this.localizado=true;
        this.usuario=u;
        console.log(this.usuario);
      } 
    }
    if(this.localizado==false){
      this.msg='Senha ou usuario invalido';
    }

  }

  ngOnInit() {
    this.usuarios=[
      {id:1,nome:'douglas',cpf:'12345678919',
      endereco:[{tipoLogradouro:'cobrança',
      logradouro:'Rua A',numero:200,complemento:null,
      bairro:'Cesar de Souza',cidade:'Mogi das Cruzes',
      estado:'SP',cep:'08810-340'},
      {tipoLogradouro:'cobrança',
      logradouro:'Rua B',numero:250,complemento:null,
      bairro:'Cesar de Souza',cidade:'Mogi das Cruzes',
      estado:'SP',cep:'08810-400'}],
      telefone:[{id:1,ddd:'11',numero:'23452345'},
      {id:2,ddd:'11',numero:'35438768'}
    ]}
  ]
  }

}
