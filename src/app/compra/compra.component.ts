import { Component, OnInit, Output } from '@angular/core';

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
  @Output() dispBtn: Boolean;


  constructor() { }
  
  ngOnInit() {
    /*this.activatedRoute.params.subscribe(
      (params:any)=>{
        this.idPessoa = params['id'];
      }
    )*/

  }
  
  showDialogEnd() {
      this.displayEnd = true;
      this.dispBtn = false;
  }

  showDialogCard() {
    this.displayCard = true;
    this.dispBtn = false;
  }
}
