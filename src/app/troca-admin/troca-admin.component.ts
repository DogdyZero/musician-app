import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ItemProduto } from '../model/item-produto';
import { StatusItem } from '../model/status-item.enum';
import { Troca } from '../model/troca';
import { ItemProdutoService } from '../services/item-produto.service';
import { TrocaService } from '../services/troca.service';
import { PessoasService } from '../services/pessoas.service';
import { Pessoa } from '../model/pessoa';
import { Cupom } from '../model/cupom';
import { OrigemCupom } from '../model/origem-cupom.enum';

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
  constructor(private trocaService:TrocaService,
    private pessoaService:PessoasService,
    private itemProdutoService:ItemProdutoService) { }
  
  updateStatusTroca(){

  }

  confirmarTroca(idTroca:number) {
    let item : ItemProduto = new ItemProduto();
    let pessoa:Pessoa;
    let troca : Troca = new Troca();
    troca.statusItem = StatusItem.TROCA_APROVADA;
    item.troca=troca;
    
    this.itemProdutoService.updateStatus(item,idTroca).subscribe(data=>{

      this.trocaService.getPessoaTroca(idTroca).subscribe(pesData=>{
        if(pesData!=null){
          let pes = pesData;
          let cupom:Cupom = new Cupom();
          cupom.type='cupom';
          cupom.codigo = 'teste';
          let cupons:Cupom[] = [];
          cupons.push(cupom);
          pes.cumpom = cupons;
          console.log(pes.cumpom);
          this.pessoaService.alterarPessoa(pes).subscribe();
        }
      })
    });
    this.display = true;
  }

  recusarTroca(idTroca:number) {
    // this.itemProdutoService.updateStatus(StatusItem.TROCA_NEGADA,idTroca).subscribe();
    this.display2 = true;
}

  ngOnInit() {
    this.inscricao[0] = this.itemProdutoService.getItensToTrade().subscribe(
      (data)=>{
        this.itemProduto=data;
      }
    );
  }

  ngOnDestroy(){
    this.inscricao.forEach(e => {
      e.unsubscribe();
    });
  }

}
