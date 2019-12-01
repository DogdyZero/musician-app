import { Component, OnInit, Input, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Pessoa } from '../../model/pessoa';
import { Router } from '@angular/router';
import { PessoasService } from '../../services/pessoas.service';
import { UsuariosService } from '../../services/usuarios.service';
import { TelefonesService } from '../../services/telefones.service';
import { CartoesService } from '../../services/cartoes.service';
import { EnderecosService } from '../../services/enderecos.service';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-menu-cadastro',
  templateUrl: './menu-cadastro.component.html',
  styleUrls: ['./menu-cadastro.component.css']
})
export class MenuCadastroComponent implements OnInit {
  constructor(
    private usuariosService:UsuariosService,
    private router:Router) { }
  
  items: MenuItem[];
  usuario: Usuario =new Usuario();
  id=0;
  totalCadastro =4;
  activeIndex: number;

  updateId(event){
    this.id=event;
    if(this.id==this.totalCadastro+1){
      // this.router.navigate(['/conf_cadastro']);
    }
  }
  
  async updateUsuario(usuario:Usuario){
    if(this.id==this.totalCadastro){

      this.usuariosService.salvarUsuario(usuario).subscribe((data)=>{
       // idPessoa = data.id;
       this.router.navigate(['/conf_cadastro']);
      },(error)=>{
        this.router.navigate(['/erro']);
        console.log(error);
      });


      //for(let endereco of pessoa.endereco){
      //  this.endercosService.salvarEndereco(endereco).subscribe((data)=>{

      //  });
      //}

     
      //for(let cartao of pessoa.cartao){
      //  cartao.id=Math.floor((Math.random() * 200) + 10);
      //  this.cartoesService.salvarCartao(cartao).subscribe();
      //}

      //pessoa.usuario.id=Math.floor((Math.random() * 200) + 10);
      //this.usuariosService.salvarUsuario(pessoa.usuario).subscribe();
      //pessoa.id=pessoa.usuario.id;

    }
  }
  

  ngOnInit() {
    this.items = [
      {label: 'Dados Pessoais',
      command:(data)=>{
        this.id=0;
      }},
      {label: 'Telefones',
      command:(data)=>{
        this.id=1;
      }},
      {label: 'Endereços',
      command:(data)=>{
        this.id=2;
      }},
      {label: 'Cartões',
      command:(data)=>{
        this.id=3;
      }},
      {label: 'Senha',
      command:(data)=>{
        this.id=4;
      }}
    ];
  }

}
