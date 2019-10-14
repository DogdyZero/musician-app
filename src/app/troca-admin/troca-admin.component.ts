import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ItemProduto } from '../model/item-produto';
import { StatusItem } from '../model/status-item.enum';
import { Troca } from '../model/troca';
import { ItemProdutoService } from '../services/item-produto.service';
import { EstoqueService } from '../services/estoque.service';
import { ProdutosService } from '../services/produtos.service';


@Component({
  selector: 'app-troca-admin',
  templateUrl: './troca-admin.component.html',
  styleUrls: ['./troca-admin.component.css']
})
export class TrocaAdminComponent implements OnInit ,OnDestroy{
  display: boolean = false;
  display2: boolean = false;
  itemProduto: ItemProduto[] = [];

  inscricao:Subscription[]=[];
  constructor(
    private estoqueService:EstoqueService,
    private produtoService:ProdutosService,
    private itemProdutoService:ItemProdutoService) { }
  
  confirmarTroca(idTroca:number) {
    let item : ItemProduto = new ItemProduto();
    this.itemProduto.forEach(element => {
      if(idTroca==element.id){
        item = element;
        let troca:Troca = new Troca();
        troca.statusItem = StatusItem.TROCA_APROVADA
        item.troca = troca;
      }
    });
    this.itemProdutoService.updateStatus(item,idTroca).subscribe(itemSubs=>{
     this.produtoService.getProdutoEstoque(item.produto.id).subscribe(prod=>{
      let novoEstoque = prod.quantidadeProduto+1;
      prod.quantidadeProduto=novoEstoque;
      console.log(prod);
      this.estoqueService.alterarEstoque(prod).subscribe();
    })
    });
    this.display = true;
    window.location.reload();
  }
 

  recusarTroca(idTroca:number) {
    let item : ItemProduto = new ItemProduto();
    this.itemProduto.forEach(element => {
      if(idTroca==element.id){
        item = element;
        let troca:Troca = new Troca();
        troca.statusItem = StatusItem.TROCA_NEGADA
        item.troca = troca;
      }
    });
    this.itemProdutoService.updateStatus(item,idTroca).subscribe();
    this.display2 = true;
    window.location.reload();
  }

  ngOnInit() {
    this.inscricao[0] = this.itemProdutoService.getItensToTrade().subscribe(
      (data)=>{
        this.itemProduto=data;
        this.itemProduto.forEach(element =>{
          console.log(StatusItem.TROCA_APROVADA);
          if(element.troca.statusItem == StatusItem.TROCA_APROVADA || element.troca.statusItem == StatusItem.TROCA_NEGADA || element.troca.statusItem == StatusItem.TROCA_REALIZADA ){
            element.troca.doIt = true;
          }else{
            element.troca.doIt = false;
          }
        });
      }
    );

  }

  ngOnDestroy(){
    this.inscricao.forEach(e => {
      e.unsubscribe();
    });
  }

}
