import { Component, OnInit, Input } from '@angular/core';
import { Pessoa } from '../model/pessoa';

@Component({
  selector: 'app-cons-endereco',
  templateUrl: './cons-endereco.component.html',
  styleUrls: ['./cons-endereco.component.css']
})
export class ConsEnderecoComponent implements OnInit {

  @Input() pessoa:Pessoa;
  constructor() { }

  ngOnInit() {
    
  }

}
