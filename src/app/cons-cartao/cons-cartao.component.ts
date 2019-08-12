import { Component, OnInit, Input } from '@angular/core';
import { Pessoa } from '../model/pessoa';

@Component({
  selector: 'app-cons-cartao',
  templateUrl: './cons-cartao.component.html',
  styleUrls: ['./cons-cartao.component.css']
})
export class ConsCartaoComponent implements OnInit {
  @Input() pessoa :Pessoa;
  constructor() { }

  ngOnInit() {
  }

}
