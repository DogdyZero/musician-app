import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import { ItemProduto } from '../model/item-produto';
import { Pedido } from '../model/pedido';
import { StatusItem } from '../model/status-item.enum';
import { Troca } from '../model/troca';
import { ItemProdutoService } from '../services/item-produto.service';
import { PedidosService } from '../services/pedidos.service';
import { UsuariosService } from '../services/usuarios.service';
import { Pessoa } from './../model/pessoa';

@Component({
  selector: 'app-detalhe-pedido',
  templateUrl: './detalhe-pedido.component.html',
  styleUrls: ['./detalhe-pedido.component.css']
})
export class DetalhePedidoComponent implements OnInit, OnDestroy {
  StatusItem=StatusItem;
  display: boolean = false;
  selectedValue: string;
  pessoa:Pessoa;
  pedido:Pedido;
  itensProdutos:ItemProduto[]=[];
  spinner:boolean = true;
  tela:boolean=false;
  opcoesTroca:SelectItem[];
  opcao: string;

  constructor(
    private pedidoService:PedidosService,
    private usuariosService:UsuariosService,
    private itemProdutoService:ItemProdutoService, 
    private route:Router, 
    private activatedRoute:ActivatedRoute) { }

  inscricao :Subscription;
  idItem:number;
  showDialog(id:number) {
    this.idItem = id;
    this.display = true;
  }
  solicitarTroca(descricao:string){
    let troca = new Troca();
    troca.descricaoProblema = descricao;
    troca.statusItem =StatusItem.TROCA_SOLICITADA;
    let itemProduto:ItemProduto = new ItemProduto();
    itemProduto.troca = troca;
    this.itemProdutoService.updateStatus(itemProduto,this.idItem).subscribe();
    this.display=false;
  }

  ngOnInit() {
    let usuario = this.usuariosService.getUsuario();
    this.pessoa = usuario.pessoa;
    let id:number;
    this.activatedRoute.params.subscribe(
      (params:any)=>{
        id = params['id'];
      }
    )
    this.inscricao = this.pedidoService.getPedido(id).subscribe(
      (data)=>{
        this.pedido = data;
        this.spinner=false;
        this.tela=true;
      }
    )
    this.opcoesTroca = [
      {label: 'Correspondência', value: 'Correspondência'},
      {label: 'Defeito de fabricação', value: 'Defeito de fabricação'},
      {label: 'Arrependimento', value: 'Arrependimento'},
      {label: 'Outros Motivos', value: 'Outros Motivos'}
    ];
  }
  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
