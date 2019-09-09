import { Pessoa } from './../model/pessoa';
import { PedidosService } from './../services/pedidos.service';
import { Pedido } from './../model/pedido';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedidos-usuario',
  templateUrl: './pedidos-usuario.component.html',
  styleUrls: ['./pedidos-usuario.component.css']
})
export class PedidosUsuarioComponent implements OnInit {
  pedido: Pedido[] = [];
  @Input() pessoa:Pessoa;
  
  constructor(private pedidoService:PedidosService,private router:Router) { }

  ngOnInit() {
    this.pedidoService.getPedidos().subscribe(
      (data)=>{
        this.pedido=data;
      }
    );
    this.pedido = [
      {
          id: 1,
          cliente: null,
          produto: null,
          frete: 100,
          total: null,
          data: null,
          status: null
      },
    ];
  }

}
