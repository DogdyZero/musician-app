import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-novo-cartao',
  templateUrl: './novo-cartao.component.html',
  styleUrls: ['./novo-cartao.component.css']
})
export class NovoCartaoComponent implements OnInit {
  //selectedCard: string;
  displayCard: boolean = false;
  selectedCard: string[] = [];
  @Output() dispBtn: Boolean;

  constructor() { }

  ngOnInit() {
  }

  showDialogCard() {
    this.displayCard = true;
    this.dispBtn = false;
  }
}
