import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-cons-endereco',
  templateUrl: './cons-endereco.component.html',
  styleUrls: ['./cons-endereco.component.css']
})
export class ConsEnderecoComponent implements OnInit {

  @Input() usuario:Usuario;
  constructor() { }

  ngOnInit() {
  }

}
