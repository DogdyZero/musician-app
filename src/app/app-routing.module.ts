import { ConsCadastroAdminComponent } from './Consulta/cons-cadastro-admin/cons-cadastro-admin.component';
import { EditUsuarioComponent } from './Edit/edit-usuario/edit-usuario.component';
import { ConfCadastroComponent } from './Cadastro/conf-cadastro/conf-cadastro.component';
import { ConfCompraComponent } from './Venda/conf-compra/conf-compra.component';
import { EditProdutoComponent } from './Edit/edit-produto/edit-produto.component';
import { MenuUsuarioComponent } from './Menu/menu-usuario/menu-usuario.component';
import { MenuAdminComponent } from './Menu/menu-admin/menu-admin.component';
import { CompraComponent } from './Venda/compra/compra.component';
import { CartComponent } from './Venda/cart/cart.component';
import { MenuCadastroComponent } from './Menu/menu-cadastro/menu-cadastro.component';
import { CadEnderecoComponent } from './Cadastro/cad-endereco/cad-endereco.component';
import { AltSenhaComponent } from './Edit/alt-senha/alt-senha.component';
import { CadCartaoComponent } from './Cadastro/cad-cartao/cad-cartao.component';
import { CadUsuarioComponent } from './Cadastro/cad-usuario/cad-usuario.component';
import { CadProdutoComponent } from './Cadastro/cad-produto/cad-produto.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { DescProdutoComponent } from './desc-produto/desc-produto.component';
import { DetalhePedidoComponent } from './detalhe-pedido/detalhe-pedido.component';
import { ErroComponent } from './erro/erro.component';



const routes: Routes = [
  { path : '', component:MainComponent},
  { path : 'produto/:id', component:DescProdutoComponent},
  // { path : 'carrinho/:id', component:CartComponent},
  { path : 'carrinho', component:CartComponent},
  { path : 'usuario/:id', component:MenuUsuarioComponent},
  { path : 'admin', component:MenuAdminComponent},
  { path : 'cad_produto', component:CadProdutoComponent},
  { path : 'cad_cartao', component:CadCartaoComponent},
  { path : 'cadastro', component:MenuCadastroComponent},
  { path : 'cad_endereco', component:CadEnderecoComponent},
  { path : 'alt_senha', component:AltSenhaComponent},
  { path : 'login', component:LoginComponent},
  { path : 'compra/:id', component:CompraComponent},
  { path : 'compra', component:CompraComponent},
  { path : 'edit_prod', component:EditProdutoComponent},
  { path : 'fechamento', component:ConfCompraComponent},
  { path : 'conf_cadastro', component:ConfCadastroComponent},
  { path : 'edit_user/:id', component:EditUsuarioComponent},
  { path : 'cons_cad/:id', component: ConsCadastroAdminComponent},
  { path : 'erro', component:ErroComponent},
  { path : 'detalhes_pedido/:id', component:DetalhePedidoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
