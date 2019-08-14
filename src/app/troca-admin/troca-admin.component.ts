import { Component, OnInit } from '@angular/core';
import { MemoryPedidoDataBase } from '../memory-pedido-data-base';

@Component({
  selector: 'app-troca-admin',
  templateUrl: './troca-admin.component.html',
  styleUrls: ['./troca-admin.component.css']
})
export class TrocaAdminComponent implements OnInit {
  
  pedido = MemoryPedidoDataBase;
  constructor() { }

  ngOnInit() {
  }

}
