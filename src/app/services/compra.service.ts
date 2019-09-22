import { Injectable } from '@angular/core';
import { Pagamento } from '../model/pagamento';
import { Pedido } from '../model/pedido';
import { Pessoa } from '../model/pessoa';
import { Usuario } from '../model/usuario';
import { CartService } from './cart.service';
import { FormaPagamentoService } from './forma-pagamento.service';
import { FreteService } from './frete.service';
import { UsuariosService } from './usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  constructor(
    private formaPagamentoService:FormaPagamentoService,
    private freteService:FreteService,
    private carrinhoService:CartService,
    private usuarioService:UsuariosService) { }

    efetivarCompra(pessoa:Pessoa){
      let pedidos:Pedido[]=[];
      let pedido:Pedido = new Pedido();
      let pagamento:Pagamento = new Pagamento();
      
      pagamento.formaPagamento = this.formaPagamentoService.getFormasPagamento();

      pedido.frete = this.freteService.getFrete();

      pedido.pagamento = pagamento;
      pedido.carrinhoCompra = this.carrinhoService.getCarrinho();
      pedidos.push(pedido);
      pessoa.pedido = pedidos;
      let usuario:Usuario = this.usuarioService.getUsuario();
      if(usuario.pessoa.id==pessoa.id){
        usuario.pessoa=pessoa;
        this.usuarioService.alterarUsuario(usuario,usuario.id).subscribe((data=>{
          console.log(data);
        }));
      }
      return pessoa;
    }
}
