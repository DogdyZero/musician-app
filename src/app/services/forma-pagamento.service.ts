import { Injectable } from '@angular/core';
import { Cartao } from '../model/cartao';
import { Cupom } from '../model/cupom';
import { FormaPagamento } from '../model/forma-pagamento';

@Injectable({
  providedIn: 'root'
})
export class FormaPagamentoService {
    constructor() { }

    formasPagamento:FormaPagamento[]=[];

    updateFormaPagamentoList(formaPagamento:FormaPagamento){
        if(formaPagamento.tipoPagamento instanceof Cartao){
            formaPagamento.tipoPagamento.type='cartao';
        } else if(formaPagamento.tipoPagamento instanceof Cupom){
            formaPagamento.tipoPagamento.type='cupom';
        } 
        this.formasPagamento.push(formaPagamento);
    }

    getFormasPagamento(){
        return this.formasPagamento;
    }

}
