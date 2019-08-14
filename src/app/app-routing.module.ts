import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CadProdutoComponent } from './cad-produto/cad-produto.component';
import { CadUsuarioComponent } from './cad-usuario/cad-usuario.component';
import { CadCartaoComponent } from './cad-cartao/cad-cartao.component';
import { HeaderComponent } from './header/header.component';
import { AltSenhaComponent } from './alt-senha/alt-senha.component';
import { LoginComponent } from './login/login.component';
import { CadEnderecoComponent } from './cad-endereco/cad-endereco.component';
import { MenuCadastroComponent } from './menu-cadastro/menu-cadastro.component';
import { CartComponent } from './cart/cart.component';
import { GraficoComponent } from './grafico/grafico.component';
import { DescProdutoComponent } from './desc-produto/desc-produto.component';


const routes: Routes = [
  { path : '', component:MainComponent},
  { path : 'produto/:id', component:DescProdutoComponent},
  { path : 'head', component:HeaderComponent},
  { path : 'cad_produto', component:CadProdutoComponent},
  { path : 'cad_cartao', component:CadCartaoComponent},
  { path : 'cadastro', component:CadUsuarioComponent},
  { path : 'menu', component:MenuCadastroComponent},
  { path : 'cad_endereco', component:CadEnderecoComponent},
  { path : 'alt_senha', component:AltSenhaComponent},
  { path : 'login', component:LoginComponent},
  { path : 'cart', component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
