import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ItemProduto } from '../model/item-produto';
import { Statusitem } from '../model/status-item.enum';
import { ItemProdutoService } from '../services/item-produto.service';

@Component({
  selector: 'app-troca-admin',
  templateUrl: './troca-admin.component.html',
  styleUrls: ['./troca-admin.component.css']
})
export class TrocaAdminComponent implements OnInit ,OnDestroy{
  display: boolean = false;
  display2: boolean = false;
  itemProduto: ItemProduto[] = [];

  Statusitem=Statusitem;

  inscricao:Subscription;
  constructor(private itemProdutoService:ItemProdutoService) { }
  

  confirmarTroca(idTroca:number) {
    this.itemProdutoService.updateStatus(Statusitem.TROCA_APROVADA,idTroca).subscribe();
    this.display = true;
  }

  recusarTroca(idTroca:number) {
    this.itemProdutoService.updateStatus(Statusitem.TROCA_NEGADA,idTroca).subscribe();
    this.display2 = true;
}

  ngOnInit() {
    this.inscricao = this.itemProdutoService.getItensToTrade().subscribe(
      (data)=>{
        this.itemProduto=data;
      }
    );
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
