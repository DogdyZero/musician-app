import { Component, OnInit } from '@angular/core';
import { MemoryPessoa } from '../memoryPessoasDataBase';

@Component({
  selector: 'app-cons-cartao-admin',
  templateUrl: './cons-cartao-admin.component.html',
  styleUrls: ['./cons-cartao-admin.component.css']
})
export class ConsCartaoAdminComponent implements OnInit {
  pessoa = MemoryPessoa;
  constructor() { }

  ngOnInit() {
  }

}
