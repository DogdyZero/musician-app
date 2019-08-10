import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-cons-cadastro',
  templateUrl: './cons-cadastro.component.html',
  styleUrls: ['./cons-cadastro.component.css']
})
export class ConsCadastroComponent implements OnInit {
  @Input() usuario: Usuario;
  constructor() { }

  ngOnInit() {
  }

}
