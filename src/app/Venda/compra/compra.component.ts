import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Usuario } from 'src/app/model/usuario';
import { CartService } from 'src/app/services/cart.service';
import { CompraService } from 'src/app/services/compra.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { PessoasService } from '../../services/pessoas.service';
import { Pessoa } from './../../model/pessoa';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {
  valorTotal:number;
  //valorCompra:number;
  sum :number= 0;
  cups :string[] = [];
  pessoa:Pessoa;
  valorFrete:number;
  entrega:boolean=true;
  pagamento:boolean=false;
  //pedido:Pedido;
  total:number=0;

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
    private compraService:CompraService,
    private carrinho:CartService,
    private router:Router,
    ) { }
  
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
    let item = this.carrinho.getitensProdutos();
    item.forEach(element => {
      this.total=this.total + (element.valorProduto*element.quantidade*1);
    });

  }
  valorFreteEvento(event:number){
    this.valorFrete = event;
  }
  totalCompra(event){
    this.sum = event;
    if(this.valorFrete!=0){
      if(this.total+this.valorFrete==this.sum){
        this.pagamento=true;
      }
    }
  }
  again(){
    this.sum = 0;
    this.cups = [];
    this.pagamento = false;
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }
  
}
