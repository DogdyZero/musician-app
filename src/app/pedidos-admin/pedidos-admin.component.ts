import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';

interface Status {
  name: string;
  code: string;
}

@Component({
  selector: 'app-pedidos-admin',
  templateUrl: './pedidos-admin.component.html',
  styleUrls: ['./pedidos-admin.component.css']
})
export class PedidosAdminComponent implements OnInit {
  //pedido = MemoryPedidoDataBase;
  status: SelectItem[];
  selectedStatus: Status;

  constructor() {
    this.status = [
      {label:'Status do pedido', value:null},
      {label:'Aguardando aprovação', value:{id:1, name: 'Aguardando aprovação', code: 'AP'}},
      {label:'Em separação', value:{id:2, name: 'Em separação', code: 'ES'}},
      {label:'Em transporte', value:{id:3, name: 'Em transporte', code: 'ET'}},
      {label:'Entregue', value:{id:4, name: 'Entregue', code: 'ENT'}},
  ];
   }

  ngOnInit() {
  }

}
