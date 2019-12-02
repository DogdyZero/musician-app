import { Pessoa } from './../model/pessoa';
import { PedidosService } from './../services/pedidos.service';
import { Pedido } from './../model/pedido';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pedidos-usuario',
  templateUrl: './pedidos-usuario.component.html',
  styleUrls: ['./pedidos-usuario.component.css']
})
export class PedidosUsuarioComponent implements OnInit {
  pedido: Pedido[] = [];
  @Input() pessoa:Pessoa;
  display
  val1
  inscricao:Subscription;
  
  constructor(private pedidoService:PedidosService,private router:Router) { }

  ngOnInit() {
  }

}
