import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Cartao } from 'src/app/model/cartao';
import { Cupom } from 'src/app/model/cupom';
import { FormaPagamento } from 'src/app/model/forma-pagamento';
import { TipoPagamento } from 'src/app/model/tipo-pagamento';
import { FormaPagamentoService } from 'src/app/services/forma-pagamento.service';
import { Pessoa } from '../../model/pessoa';
import { Usuario } from 'src/app/model/usuario';
import { PessoasService } from 'src/app/services/pessoas.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { CuponsService } from 'src/app/services/cupons.service';
import { Status } from 'src/app/model/status.enum';

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
  @Input()cups :string[] = [];
  @Input() sum:number;
  @Output() dispBtn: Boolean;
  @Input() valorTotal:number;
  @Output() valorCompra = new EventEmitter();
  @Input() pessoa:Pessoa;
  usuario:Usuario;
  updateUsuario(usuario:Usuario){
    let pessoa = this.usuario.pessoa;
    this.pessoasService.alterarPessoa(pessoa).subscribe();
    this.displayCard=false;
    pessoa.cartao.forEach(cartao => {
      let obj={label:cartao.numeroCartao, value:cartao.id}
      this.itensLabel.push(obj);
    });
  }
  opcoesLabel:SelectItem[]=[]
  opcao:string;

  itensLabel:SelectItem[]=[];
  item:string;

  mostrarLabel:boolean=false;
  cupom:boolean=true;
  adicionar(){
    this.cupom=false;
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
      for(let cupom of this.pessoa.cupom){
        if(cupom!=null){
          if(cupom.status==Status.ATIVO){
            let obj={label:cupom.codigo+' - R$'+cupom.valor, value:cupom.id + ' ' + cupom.valor}
            this.valorCard[0]=cupom.valor;
            this.cupom=true;
            this.itensLabel.push(obj);
          }
        }
      }
    } 
    this.mostrarLabel = true;
  }

  processar(){
    if(this.opcao == 'cupom'){
      this.valorCard = [];
      var exstCup = new Boolean(false);
      var result = this.item.split(" ");
      this.cups.forEach(element => {
        if(result[0] == element){
          alert("Esse cupom ja foi utilizado para essa compra, tente novamente com outro cupom ou cartão!");
          exstCup = true;
        }
      });
      if(exstCup == false){
        console.log("typeof this.item: ");
        console.log("Valor: " + this.item);
        this.valorCard.push(parseFloat(result[1]));
        this.cups.push(result[0]);
        result = [];
      }
    }
    this.valorCard.forEach(element => { 
      this.sum += parseFloat(element.toString());
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

  constructor(private usuariosService:UsuariosService,
    private pessoasService:PessoasService,
    private formaPagamentoService:FormaPagamentoService,
    private cuponsService:CuponsService) { }

  ngOnInit() {
    this.opcoesLabel=[
      {label:'Cartão',value:'cartao'},
      {label:'Cupom',value:'cupom'}
    ]
    this.usuario = this.usuariosService.getUsuario();
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
