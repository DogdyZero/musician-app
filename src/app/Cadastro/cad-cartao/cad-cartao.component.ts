import { Bandeira } from '../../model/bandeira.enum';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { SelectItem, ConfirmationService, Message } from 'primeng/api';
import { Pessoa } from '../../model/pessoa';
import { Cartao } from '../../model/cartao';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-cad-cartao',
  templateUrl: './cad-cartao.component.html',
  styleUrls: ['./cad-cartao.component.css'],
  providers: [ConfirmationService]
})
export class CadCartaoComponent implements OnInit {
  constructor(private confirmationService: ConfirmationService) { }

  @Input() dispBtn: boolean = true;
  @Input() usuario :Usuario;
  @Output() update = new EventEmitter();

  @Input() id:number;
  @Output() updateId = new EventEmitter();

  cartao: Cartao = new Cartao();
  cartoes:Cartao[] = [];

  val:Boolean = true;
  msgs: Message[] = [];
  
  tipoBandeira: SelectItem[];
  selectedType: Bandeira;
  selectedTypes: string[] = ['Elo', 'MasterCard'];

  cadastrarNovo(){
    this.confirmationService.confirm({
      message: 'Deseja cadastrar outro cartão?',
      header: 'Confirmação',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        // limpar campos
        this.cartao = new Cartao();
      },
      reject: () => {
        // direcionar para a proxima tela
        this.update.emit(this.usuario);
        this.updateId.emit(++this.id);    
      }
  });
  }


  salvar(cartao:Cartao){
    if(this.selectedType == null){
      this.val = false;
      console.log("Erro na bandeira");
    }
    if(cartao.nomeCartao == null){
      this.val = false;
      console.log("Erro no nome");
    }
    if(cartao.numeroCartao == null || cartao.numeroCartao.toString().length != 19){
      this.val = false;
      console.log("Erro no número do cartão");
    }
    if(cartao.numeroCartao == null || cartao.validade.toString().length != 7){
      this.val = false;
      console.log("Erro na validade do cartão");
    }
    if(cartao.codSeguranca == null || cartao.codSeguranca.toString().length != 3){
      this.val = false;
      console.log("Erro no CVV");
    }
    if(this.val == true){

      cartao.type='cartao';
      this.cartao = cartao;
      this.cartao.bandeira = this.selectedType
      this.cartoes.push(this.cartao);
      this.usuario.pessoa.cartao = this.cartoes;
      console.log(cartao)
      this.cadastrarNovo();
    }else{
      this.msgs.push({severity:'error', summary:'Erro no formulário', detail:'Preencha os campos corretamente!'});
      this.val = true;
    }
  }


  ngOnInit() {
    this.tipoBandeira = [
      {label:'Hypercard',value:Bandeira.HYPERCARD },
      {label:'Visa' , value: Bandeira.VISA},
      {label:'Mastercard', value:  Bandeira.MASTERCARD}
    ];
  }

}
