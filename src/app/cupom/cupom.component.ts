import { Pessoa } from './../model/pessoa';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cupom',
  templateUrl: './cupom.component.html',
  styleUrls: ['./cupom.component.css']
})
export class CupomComponent implements OnInit {
  //cupom = MemoryCupomDataBase;
  @Input() pessoa:Pessoa;
  constructor() { }

  ngOnInit() {
  }

}
