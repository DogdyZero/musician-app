import { Pedido } from './../../model/pedido';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

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
  @Input() sum:number;
  @Output() dispBtn: Boolean;
  @Input() valorTotal:number;
  @Output() valorCompra = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  showDialogCard() {
    this.displayCard = true;
    this.dispBtn = false;
  }

  totalPago(){
    this.valorCard.forEach(element => {
        this.sum += parseInt(element.toString());
    });
    this.valorCard = [];
    this.valorCompra.emit(this.sum);
  }


}
