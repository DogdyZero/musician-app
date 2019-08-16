import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {
  selectedEnd: string;
  selectedCard: string;
  displayEnd: boolean = false;
  displayCard: boolean = false;


  constructor() { }
  
  ngOnInit() {

  }
  
  showDialogEnd() {
      this.displayEnd = true;
  }

  showDialogCard() {
    this.displayCard = true;
}
}
