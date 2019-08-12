import { Component, OnInit } from '@angular/core';
import { MemoryPessoa } from '../memoryPessoasDataBase';

@Component({
  selector: 'app-cons-cadastro-admin',
  templateUrl: './cons-cadastro-admin.component.html',
  styleUrls: ['./cons-cadastro-admin.component.css']
})
export class ConsCadastroAdminComponent implements OnInit {
  pessoa = MemoryPessoa;

  constructor() { }

  ngOnInit() {
  }

}
