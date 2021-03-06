import { Injectable } from '@angular/core';
import { Pagamento } from '../model/pagamento';
import { Pedido } from '../model/pedido';
import { Pessoa } from '../model/pessoa';
import { Usuario } from '../model/usuario';
import { CartService } from './cart.service';
import { FormaPagamentoService } from './forma-pagamento.service';
import { FreteService } from './frete.service';
import { UsuariosService } from './usuarios.service';
import { EstoqueService } from './estoque.service';
import { ProdutosService } from './produtos.service';
import { Cupom } from '../model/cupom';
import { Status } from '../model/status.enum';
import { CuponsService } from './cupons.service';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  constructor(
    private formaPagamentoService:FormaPagamentoService,
    private freteService:FreteService,
    private carrinhoService:CartService,
    private usuarioService:UsuariosService,
    private estoqueService:EstoqueService,
    private produtoService:ProdutosService,
    private cupomService:CuponsService) { }

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
          for(let item of this.carrinhoService.getCarrinho().itemProduto){
            this.produtoService.getProdutoEstoque(item.produto.id).subscribe(prod=>{
              let novoEstoque = prod.quantidadeProduto-item.quantidade;
              prod.quantidadeProduto=novoEstoque;
              this.estoqueService.alterarEstoque(prod).subscribe();
            })
          }
          for(let pag of this.formaPagamentoService.getFormasPagamento()){
            if(pag.tipoPagamento instanceof Cupom){
              let cupom:Cupom = new Cupom();
              cupom.id = pag.tipoPagamento.id;
              cupom.status = Status.INATIVO;
              cupom.type = 'cupom';
              this.cupomService.updateCupom(cupom,cupom.id).subscribe();
            }
          }
          this.carrinhoService.destroy();
          this.freteService.destroy();
          pedidos = null;
          pedido = null;
          pagamento = null;
        }));
      }
      return pessoa;
    }
}