import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localePt);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadProdutoComponent } from './cad-produto/cad-produto.component';
import { CadUsuarioComponent } from './cad-usuario/cad-usuario.component';
import { CadCartaoComponent } from './cad-cartao/cad-cartao.component';
import { AltSenhaComponent } from './alt-senha/alt-senha.component';
import { DescProdutoComponent } from './desc-produto/desc-produto.component';
import { LoginComponent } from './login/login.component';
import { CadSenhaComponent } from './cad-senha/cad-senha.component';
import { ConsCadastroComponent } from './cons-cadastro/cons-cadastro.component';
import { ConsEnderecoComponent } from './cons-endereco/cons-endereco.component';
import { MenuCadastroComponent } from './menu-cadastro/menu-cadastro.component';
import { CartComponent } from './cart/cart.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { ConsCartaoComponent } from './cons-cartao/cons-cartao.component';
import { MenuProdutoComponent } from './menu-produto/menu-produto.component';
import { ConsProdutoComponent } from './cons-produto/cons-produto.component';
import { ConsEnderecoAdminComponent } from './cons-endereco-admin/cons-endereco-admin.component';
import { ConsCadastroAdminComponent } from './cons-cadastro-admin/cons-cadastro-admin.component';
import { ConsCartaoAdminComponent } from './cons-cartao-admin/cons-cartao-admin.component';
import { PedidosAdminComponent } from './pedidos-admin/pedidos-admin.component';

// primeng modules
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {TableModule} from 'primeng/table';
import {InputMaskModule} from 'primeng/inputmask';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CardModule} from 'primeng/card';
import { MenuUsuarioComponent } from './menu-usuario/menu-usuario.component';
import {TabMenuModule} from 'primeng/tabmenu';
import {KeyFilterModule} from 'primeng/keyfilter';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { MainComponent } from './main/main.component';
import { CadEnderecoComponent } from './cad-endereco/cad-endereco.component';
import { HeaderComponent } from './header/header.component';
import {SelectButtonModule} from 'primeng/selectbutton';
import {PasswordModule} from 'primeng/password';
import {ContextMenuModule} from 'primeng/contextmenu';
import {MenubarModule} from 'primeng/menubar';
import {StepsModule} from 'primeng/steps';
import {AccordionModule} from 'primeng/accordion';
<<<<<<< HEAD
import {ChartModule} from 'primeng/chart';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { GraficoComponent } from './grafico/grafico.component';
=======
import { ConsProdutoComponent } from './cons-produto/cons-produto.component';
import { ConsEnderecoAdminComponent } from './cons-endereco-admin/cons-endereco-admin.component';
import { ConsCadastroAdminComponent } from './cons-cadastro-admin/cons-cadastro-admin.component';
import { ConsCartaoAdminComponent } from './cons-cartao-admin/cons-cartao-admin.component';
import { PedidosAdminComponent } from './pedidos-admin/pedidos-admin.component';
import { PedidosUsuarioComponent } from './pedidos-usuario/pedidos-usuario.component';
import {DialogModule} from 'primeng/dialog';
import { TrocaAdminComponent } from './troca-admin/troca-admin.component';
import {SelectItem} from 'primeng/api';

>>>>>>> b9de68fd4b3b297c58bbe7d95ad79e5bd2dba9c6

@NgModule({
  declarations: [
    AppComponent,
    CadProdutoComponent,
    CadUsuarioComponent,
    MenuUsuarioComponent,
    MainComponent,
    CadEnderecoComponent,
    HeaderComponent,
    CadCartaoComponent,
    AltSenhaComponent,
    DescProdutoComponent,
    LoginComponent,
    CadSenhaComponent,
    ConsCadastroComponent,
    ConsEnderecoComponent,
    MenuCadastroComponent,
    CartComponent,
    MenuAdminComponent,
    ConsCartaoComponent,
    MenuProdutoComponent,
    ConsProdutoComponent,
    ConsEnderecoAdminComponent,
    ConsCadastroAdminComponent,
    ConsCartaoAdminComponent,
    PedidosAdminComponent,
<<<<<<< HEAD
    GraficoComponent,
=======
    PedidosUsuarioComponent,
    TrocaAdminComponent,
>>>>>>> b9de68fd4b3b297c58bbe7d95ad79e5bd2dba9c6
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // primeng imports
    InputTextModule,
    ButtonModule,
    ContextMenuModule,
    DropdownModule,
    TableModule,
    PasswordModule,
    InputMaskModule,
    RadioButtonModule,
    CardModule,
    KeyFilterModule,
    SelectButtonModule,
    InputTextareaModule,
    TabMenuModule,
    MenubarModule,
    StepsModule,
<<<<<<< HEAD
    AccordionModule,
    ChartModule,
    MessagesModule,
    MessageModule
=======
    DialogModule,
    AccordionModule
>>>>>>> b9de68fd4b3b297c58bbe7d95ad79e5bd2dba9c6
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
