import { ActivatedRoute } from '@angular/router';
import { Pessoa } from './../../model/pessoa';
import { Component, OnInit, Output } from '@angular/core';
import { PessoasService } from '../../services/pessoas.service';
import { Subscription } from 'rxjs';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from 'src/app/model/usuario';
import { FreteService } from 'src/app/services/frete.service';
import { CompraService } from 'src/app/services/compra.service';

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
  valorFrete:number;
  entrega:boolean=true;
  pagamento:false=false;
  //pedido:Pedido;

  spinner:boolean=true;
  tela:boolean=false;
  inscricao:Subscription;

  comprar(){
    this.compraService.efetivarCompra(this.pessoa);
  }

  constructor(
    private activatedRoute:ActivatedRoute,
    private pessoasService:PessoasService,
    private usuarioService:UsuariosService,
    private freteService:FreteService,
    private compraService:CompraService) { }
  
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
  valorFreteEvento(event:number){
    this.valorFrete = event;
    console.log(event);
  }
  totalCompra(event){
    this.sum = event;
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }
  
}
