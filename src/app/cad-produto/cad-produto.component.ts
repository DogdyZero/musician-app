import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-cad-produto',
  templateUrl: './cad-produto.component.html',
  styleUrls: ['./cad-produto.component.css']
})
export class CadProdutoComponent implements OnInit {
  prodCategoria: SelectItem[];
  

  ngOnInit() {
    this.prodCategoria = [
      {label: 'Corda', value: 'Corda'},
      {label: 'Sopro', value: 'Sopro'},
      {label: 'Elétrico', value: 'Elétrico'},
      {label: 'Percussão', value: 'Percussão'},
      {label: 'Outros', value: 'Outros'}
  ];
  }

}
