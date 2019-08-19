import { Component, OnInit, Input, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Usuario } from '../model/usuario';
import { Pessoa } from '../model/pessoa';
import { Router } from '@angular/router';
import { PessoasService } from '../services/pessoas.service';
import { UsuariosService } from '../services/usuarios.service';
import { TelefonesService } from '../services/telefones.service';
import { CartoesService } from '../services/cartoes.service';
import { EnderecosService } from '../services/enderecos.service';

@Component({
  selector: 'app-menu-cadastro',
  templateUrl: './menu-cadastro.component.html',
  styleUrls: ['./menu-cadastro.component.css']
})
export class MenuCadastroComponent implements OnInit {
  constructor(
    private usuariosService:UsuariosService,
    private telefonesService:TelefonesService,
    private endercosService:EnderecosService,
    private cartoesService:CartoesService,
    private pessoasService:PessoasService,
    private router:Router) { }
  
  items: MenuItem[];
  pessoa: Pessoa =new Pessoa();
  id=0;
  totalCadastro =3;
  activeIndex: number;

  updateId(event){
    this.id=event;
    if(this.id==this.totalCadastro+1){
      this.router.navigate(['/fechamento']);
    }
  }
  async updatePessoa(pessoa:Pessoa){
    if(this.id==this.totalCadastro){

      for(let endereco of pessoa.endereco){
        endereco.id=Math.floor((Math.random() * 200) + 10);
        this.endercosService.salvarEndereco(endereco).subscribe();
      }

     
      for(let cartao of pessoa.cartao){
        cartao.id=Math.floor((Math.random() * 200) + 10);
        this.cartoesService.salvarCartao(cartao).subscribe();
      }

      pessoa.usuario.id=Math.floor((Math.random() * 200) + 10);
      this.usuariosService.salvarUsuario(pessoa.usuario).subscribe();
      pessoa.id=pessoa.usuario.id;
      this.pessoasService.salvarPessoa(pessoa).subscribe();

    }
  }
  

  ngOnInit() {
    this.items = [
      {label: 'Dados Pessoais',
      command:(data)=>{
        this.id=0;
      }},
      {label: 'Endereços',
      command:(data)=>{
        this.id=1;
      }},
      {label: 'Cartões',
      command:(data)=>{
        this.id=2;
      }},
      {label: 'Senha',
      command:(data)=>{
        this.id=3;
      }}
    ];
  }

}
