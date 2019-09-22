import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Pessoa } from '../../model/pessoa';
import { SelectItem } from 'primeng/api';
import { Pagamento } from 'src/app/model/pagamento';
import { FormaPagamento } from 'src/app/model/forma-pagamento';
import { Cartao } from 'src/app/model/cartao';
import { PedidosService } from 'src/app/services/pedidos.service';
import { Pedido } from 'src/app/model/pedido';
import { TipoPagamento } from 'src/app/model/tipo-pagamento';
import { Cupom } from 'src/app/model/cupom';
import { FormaPagamentoService } from 'src/app/services/forma-pagamento.service';

@Component({
  selector: 'app-novo-cartao',
  templateUrl: './novo-cartao.component.html',
  styleUrls: ['./novo-cartao.component.css']
})
export class NovoCartaoComponent implements OnInit {
  //selectedCard: string;
  displayCard: boolean = false;
  selectedCard: string[] = [];
  valorCard: number[] = [];
  //teste:boolean;
  @Input() sum:number;
  @Output() dispBtn: Boolean;
  @Input() valorTotal:number;
  @Output() valorCompra = new EventEmitter();
  @Input() pessoa:Pessoa;

  opcoesLabel:SelectItem[]=[]
  opcao:string;

  itensLabel:SelectItem[]=[];
  item:string;

  mostrarLabel:boolean=false;

  adicionar(){
    this.mostrarLabel = false;
    this.itensLabel=[];
    if(this.opcao=='cartao'){
      let cartoes = this.pessoa.cartao;
      for(let cartao of cartoes){
        if(cartao!=null){
          let obj={label:cartao.numeroCartao, value:cartao.id}
          this.itensLabel.push(obj);
        }
      }
    } else if (this.opcao=='cupom'){
      let cupons = this.pessoa.cumpom;
      for(let cupom of cupons){
        if(cupom!=null){
          let obj={label:cupom.codigo+' '+cupom.valor, value:cupom.id}
          this.itensLabel.push(obj);
        }
      }
    } 
    this.mostrarLabel = true;
  }

  processar(){
    this.valorCard.forEach(element => {
        this.sum += parseInt(element.toString());
    });
    this.valorCard = [];
    this.valorCompra.emit(this.sum);
    this.salvar();
    this.mostrarLabel=false;
  }
  salvar(){
    let forma:FormaPagamento = new FormaPagamento();
    if(this.opcao=='cartao'){
      let cartao: TipoPagamento = new Cartao();
      cartao.id = parseInt(this.item);
      forma.tipoPagamento=cartao;
    } else if(this.opcao=='cupom'){
      let cupom: TipoPagamento = new Cupom();
      cupom.id = parseInt(this.item);
    
      forma.tipoPagamento=cupom;
    }
    
    this.formaPagamentoService.updateFormaPagamentoList(forma);
  }

  constructor(private formaPagamentoService:FormaPagamentoService) { }

  ngOnInit() {
    this.opcoesLabel=[
      {label:'Cartão',value:'cartao'},
      {label:'Cupom',value:'cupom'}
    ]

    // let cartoes:Cartao[];
    // cartoes = this.pessoa.cartao;
    // for(let cart of cartoes){
    //   let obj={label:cart.numeroCartao, value:cart.numeroCartao}
    //   this.cartoesLabel.push(obj);
    // }
  }

  showDialogCard() {
    this.displayCard = true;
    this.dispBtn = false;
  }


  habilitar(event){
    /*if(this.teste == true){
      this.teste = false;
    }else{
      this.teste = true;
    }*/
  }

}
