import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ItemProduto } from '../model/item-produto';
import { StatusItem } from '../model/status-item.enum';
import { Troca } from '../model/troca';
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

  inscricao:Subscription[]=[];
  constructor(private itemProdutoService:ItemProdutoService) { }
  
  updateStatusTroca(){

  }

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
    this.itemProdutoService.updateStatus(item,idTroca).subscribe(data=>{
      // console.log(data);
      // this.trocaService.getPessoaTroca(idTroca).subscribe(pesData=>{
      //   if(pesData!=null){
      //     let pes = pesData;
      //     let cupom:Cupom = new Cupom();
      //     cupom.type='cupom';
      //     cupom.codigo = 'teste';
      //     let cupons:Cupom[] = [];
      //     cupons.push(cupom);
      //     pes.cumpom = cupons;
      //     console.log(pes.cumpom);
      //     this.pessoaService.alterarPessoa(pes).subscribe();
      //   }
      // })
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
