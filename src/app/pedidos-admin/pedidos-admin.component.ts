import { Router } from '@angular/router';
import { UsuariosService } from './../services/usuarios.service';
import { Pedido } from './../model/pedido';
import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import {SelectItem} from 'primeng/api';
import { Subscription } from 'rxjs';
import { PedidosService } from '../services/pedidos.service';
import { StatusPedido } from '../model/status-pedido.enum';

interface Status {
  name: string;
  code: string;
}

@Component({
  selector: 'app-pedidos-admin',
  templateUrl: './pedidos-admin.component.html',
  styleUrls: ['./pedidos-admin.component.css']
})
export class PedidosAdminComponent implements OnInit, OnDestroy {
  //pedido = MemoryPedidoDataBase;
  status: SelectItem[];
  selectedStatus: Status;
  pedidos: Pedido[] = [];
  alterado:Boolean = false;

  inscricao :Subscription[]=[];

  constructor(
    private pedidosService: PedidosService,
    private usuariosService: UsuariosService) { }
  
  changeStatus(pedido:Pedido){
    this.pedidosService.updateStatus(this.checkStatus(pedido),pedido.id).subscribe();
    this.pedidosService.getPedidos().subscribe(
      (data) => {
        this.pedidos = data;
        this.pedidos.sort( (a,b) => a.id - b.id );
        this.ngOnInit();
      }
      );
      this.ngOnInit();
    // this.upId.emit(0);
  }
  checkStatus(pedido:Pedido){
    console.log(pedido.statusPedido.valueOf());
    // @ts-ignore
    this.selectedStatus = pedido.statusPedido;
    if(this.selectedStatus.code=='AP'){
      return StatusPedido.AGUARDANDO_APROVACAO;
    } else if(this.selectedStatus.code=='ES'){
      return StatusPedido.EM_SEPARACAO;
    } else if(this.selectedStatus.code=='ET'){
      return StatusPedido.EM_TRANSPORTE;
    } else if(this.selectedStatus.code=='ENT'){
      return StatusPedido.ENTREGUE;
    } else{
      return null;
    }
  }

  ngOnInit() {
    this.status = [
      {label:'Status do pedido', value:null},
      {label:'Aguardando aprovação', value:{id:1, name: 'Aguardando aprovação', code: 'AP'}},
      {label:'Em separação', value:{id:2, name: 'Em separação', code: 'ES'}},
      {label:'Em transporte', value:{id:3, name: 'Em transporte', code: 'ET'}},
      {label:'Entregue', value:{id:4, name: 'Entregue', code: 'ENT'}},
     ];
    this.inscricao[0] = this.pedidosService.getPedidos().subscribe(
          (data) => {
            this.pedidos = data;
            this.pedidos.sort( (a,b) => a.id - b.id );
          }
        );
    }

    ngOnDestroy() {
      this.inscricao.forEach(i =>i.unsubscribe()); 
    }

}
