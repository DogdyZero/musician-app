import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {SelectItem, MenuItem, ConfirmationService} from 'primeng/api';
import { Pessoa } from '../model/pessoa';
import { Cartao } from '../model/cartao';

@Component({
  selector: 'app-cad-cartao',
  templateUrl: './cad-cartao.component.html',
  styleUrls: ['./cad-cartao.component.css'],
  providers: [ConfirmationService]
})
export class CadCartaoComponent implements OnInit {
  constructor(private confirmationService: ConfirmationService) { }

  @Input() pessoa :Pessoa;
  @Output() update = new EventEmitter();

  @Input() id:number;
  @Output() updateId = new EventEmitter();

  cartao: Cartao = new Cartao();
  cartoes:Cartao[] = [];
  
  tipoBandeira: SelectItem[];
  selectedType: string;
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
        this.update.emit(this.pessoa);
        this.updateId.emit(++this.id);    
      }
  });
  }


  salvar(cartao:Cartao){
    this.cartao.bandeira=this.selectedType;
    this.cartao = cartao;
    this.cartoes.push(this.cartao);
    this.pessoa.cartao = this.cartoes;

    this.cadastrarNovo();
  }

  ngOnInit() {
  }

}
