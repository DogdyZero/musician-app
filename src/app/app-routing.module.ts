import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CadProdutoComponent } from './cad-produto/cad-produto.component';
import { CadUsuarioComponent } from './cad-usuario/cad-usuario.component';
import { CadCartaoComponent } from './cad-cartao/cad-cartao.component';
import { HeaderComponent } from './header/header.component';
import { AltSenhaComponent } from './alt-senha/alt-senha.component';
import { DescProdutoComponent } from './desc-produto/desc-produto.component';

const routes: Routes = [
  { path : '', component:MainComponent},
  { path : 'head', component:HeaderComponent},
  { path : 'cad_produto', component:CadProdutoComponent},
  { path : 'cad_cartao', component:CadCartaoComponent},
  { path : 'cad_usuario', component:CadUsuarioComponent},
  { path : 'alt_senha', component:AltSenhaComponent},
  {path : 'desc_produto', component:DescProdutoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
