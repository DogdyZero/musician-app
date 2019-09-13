import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nova-entrega',
  templateUrl: './nova-entrega.component.html',
  styleUrls: ['./nova-entrega.component.css']
})
export class NovaEntregaComponent implements OnInit {
  selectedEnd: string;
  displayEnd: boolean = false;
  @Output() dispBtn: Boolean;
  constructor() { }

  ngOnInit() {
  }

  showDialogEnd() {
    this.displayEnd = true;
    this.dispBtn = false;
}

}
