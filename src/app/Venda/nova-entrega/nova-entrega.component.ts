import { Pedido } from './../../model/pedido';
import { Component, OnInit, Output, Input } from '@angular/core';
import { Pessoa } from '../../model/pessoa';

@Component({
  selector: 'app-nova-entrega',
  templateUrl: './nova-entrega.component.html',
  styleUrls: ['./nova-entrega.component.css']
})
export class NovaEntregaComponent implements OnInit {
  selectedEnd: string;
  displayEnd: boolean = false;
  @Output() dispBtn: Boolean;
  @Input() pessoa:Pessoa
  constructor() { }

  ngOnInit() {
  }

  showDialogEnd() {
    this.displayEnd = true;
    this.dispBtn = false;
}

}
