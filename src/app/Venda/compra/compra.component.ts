import { ActivatedRoute } from '@angular/router';
import { Pessoa } from './../../model/pessoa';
import { Component, OnInit, Output } from '@angular/core';
import { PessoasService } from '../../services/pessoas.service';
import { Subscription } from 'rxjs';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {
  valorTotal:number;
  //valorCompra:number;
  sum :number= 0;
  pessoa:Pessoa;
  //pedido:Pedido;

  spinner:boolean=true;
  tela:boolean=false;
  inscricao:Subscription;

  constructor(
    private activatedRoute:ActivatedRoute,
    private pessoasService:PessoasService,
    private usuarioService:UsuariosService) { }
  
  ngOnInit() {
    let usuario:Usuario = this.usuarioService.getUsuario();
    // this.activatedRoute.params.subscribe(
    //   (params:any)=>{
    //     this.idPessoa = params['id'];
    //   }
    // )
    this.inscricao = this.pessoasService.getPessoa(usuario.pessoa.id).subscribe(
      (data)=>{
        this.pessoa=data;
        this.spinner=false;
        this.tela=true;
      }
    )

  }

  totalCompra(event){
    this.sum = event;
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }
  
}
