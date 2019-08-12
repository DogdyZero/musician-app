import { Component, OnInit } from '@angular/core';
import { MemoryPessoa } from '../memoryPessoasDataBase';

@Component({
  selector: 'app-cons-endereco-admin',
  templateUrl: './cons-endereco-admin.component.html',
  styleUrls: ['./cons-endereco-admin.component.css']
})
export class ConsEnderecoAdminComponent implements OnInit {
  constructor() { }
  pessoa = MemoryPessoa;

  ngOnInit() {

  }

}
