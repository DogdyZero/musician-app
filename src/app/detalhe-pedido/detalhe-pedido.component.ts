import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ItemProduto } from '../model/item-produto';
import { Statusitem } from '../model/status-item.enum';
import { ItemProdutoService } from '../services/item-produto.service';
import { Pessoa } from './../model/pessoa';
import { PessoasService } from './../services/pessoas.service';

@Component({
  selector: 'app-detalhe-pedido',
  templateUrl: './detalhe-pedido.component.html',
  styleUrls: ['./detalhe-pedido.component.css']
})
export class DetalhePedidoComponent implements OnInit, OnDestroy {
  display: boolean = false;
  selectedValue: string;
  pessoa:Pessoa;
  itensProdutos:ItemProduto[]=[];
  spinner:boolean = true;
  tela:boolean=false;
  constructor(
    private pessoasService:PessoasService,
    private itemProdutoService:ItemProdutoService, 
    private route:Router, 
    private activatedRoute:ActivatedRoute) { }

  inscricao :Subscription;
  idTroca:number;
  showDialog(id:number) {
    this.idTroca = id;
      this.display = true;
  }
  solicitarTroca(){
    this.itemProdutoService.updateStatus(Statusitem.TROCA_SOLICITADA,this.idTroca).subscribe();
    this.display=false;
  }

  ngOnInit() {
    let idPessoa:number;
    this.activatedRoute.params.subscribe(
      (params:any)=>{
        idPessoa = params['id'];
      }
    )
    this.inscricao = this.pessoasService.getPessoa(idPessoa).subscribe(
      (data)=>{
        this.pessoa=data;
        for(let ped of this.pessoa.pedido){
          for(let item of ped.carrinhoCompra.itemProduto){
            this.itensProdutos.push(item);
          }
        }
        this.spinner=false;
        this.tela=true;
      }
    )
  }
  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
