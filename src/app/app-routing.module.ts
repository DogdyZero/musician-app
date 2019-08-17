import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CadProdutoComponent } from './cad-produto/cad-produto.component';
import { CadUsuarioComponent } from './cad-usuario/cad-usuario.component';
import { CadCartaoComponent } from './cad-cartao/cad-cartao.component';
import { AltSenhaComponent } from './alt-senha/alt-senha.component';
import { LoginComponent } from './login/login.component';
import { CadEnderecoComponent } from './cad-endereco/cad-endereco.component';
import { MenuCadastroComponent } from './menu-cadastro/menu-cadastro.component';
import { CartComponent } from './cart/cart.component';
import { DescProdutoComponent } from './desc-produto/desc-produto.component';
import { CompraComponent } from './compra/compra.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { MenuUsuarioComponent } from './menu-usuario/menu-usuario.component';
import { EditProdutoComponent } from './edit-produto/edit-produto.component';
import { ConfCompraComponent } from './conf-compra/conf-compra.component';
import { ConfCadastroComponent } from './conf-cadastro/conf-cadastro.component';



const routes: Routes = [
  { path : '', component:MainComponent},
  { path : 'produto/:id', component:DescProdutoComponent},
  { path : 'carrinho/:id', component:CartComponent},
  { path : 'usuario/:id', component:MenuUsuarioComponent},
  { path : 'admin', component:MenuAdminComponent},
  { path : 'cad_produto', component:CadProdutoComponent},
  { path : 'cad_cartao', component:CadCartaoComponent},
  { path : 'cadastro', component:MenuCadastroComponent},
  { path : 'cad_endereco', component:CadEnderecoComponent},
  { path : 'alt_senha', component:AltSenhaComponent},
  { path : 'login', component:LoginComponent},
  { path : 'cart', component:CartComponent},
  { path : 'compra', component:CompraComponent},
  { path : 'edit_prod', component:EditProdutoComponent},
  { path : 'fechamento', component:ConfCompraComponent},
  { path : 'conf_cadastro', component:ConfCadastroComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
