import { EditProdutoComponent } from './Edit/edit-produto/edit-produto.component';
import { EditEstoqueComponent } from './Edit/edit-estoque/edit-estoque.component';
import { ConfCompraComponent } from './Venda/conf-compra/conf-compra.component';
import { ConfCadastroComponent } from './Cadastro/conf-cadastro/conf-cadastro.component';
import { CadTelefoneComponent } from './Cadastro/cad-telefone/cad-telefone.component';
import { EditUsuarioComponent } from './Edit/edit-usuario/edit-usuario.component';
import { EditCadastroComponent } from './Edit/edit-cadastro/edit-cadastro.component';
import { EditCartaoComponent } from './Edit/edit-cartao/edit-cartao.component';
import { EditEnderecoComponent } from './Edit/edit-endereco/edit-endereco.component';
import { MenuUsuarioComponent } from './Menu/menu-usuario/menu-usuario.component';
import { CadEnderecoComponent } from './Cadastro/cad-endereco/cad-endereco.component';
import { CompraComponent } from './Venda/compra/compra.component';
import { ConsCartaoAdminComponent } from './Consulta/cons-cartao-admin/cons-cartao-admin.component';
import { ConsCadastroAdminComponent } from './Consulta/cons-cadastro-admin/cons-cadastro-admin.component';
import { ConsEnderecoAdminComponent } from './Consulta/cons-endereco-admin/cons-endereco-admin.component';
import { ConsProdutoComponent } from './Consulta/cons-produto/cons-produto.component';
import { MenuProdutoComponent } from './Menu/menu-produto/menu-produto.component';
import { ConsCartaoComponent } from './Consulta/cons-cartao/cons-cartao.component';
import { MenuAdminComponent } from './Menu/menu-admin/menu-admin.component';
import { CartComponent } from './Venda/cart/cart.component';
import { MenuCadastroComponent } from './Menu/menu-cadastro/menu-cadastro.component';
import { ConsEnderecoComponent } from './Consulta/cons-endereco/cons-endereco.component';
import { ConsCadastroComponent } from './Consulta/cons-cadastro/cons-cadastro.component';
import { CadSenhaComponent } from './Cadastro/cad-senha/cad-senha.component';
import { AltSenhaComponent } from './Edit/alt-senha/alt-senha.component';
import { CadCartaoComponent } from './Cadastro/cad-cartao/cad-cartao.component';
import { CadUsuarioComponent } from './Cadastro/cad-usuario/cad-usuario.component';
import { CadProdutoComponent } from './Cadastro/cad-produto/cad-produto.component';
import { EditTelefoneComponent } from './Edit/edit-telefone/edit-telefone.component';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localePt);
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DescProdutoComponent } from './desc-produto/desc-produto.component';
import { LoginComponent } from './login/login.component';
import { PedidosAdminComponent } from './pedidos-admin/pedidos-admin.component';
import { GraficoComponent } from './grafico/grafico.component';
import { PedidosUsuarioComponent } from './pedidos-usuario/pedidos-usuario.component';
import { TrocaAdminComponent } from './troca-admin/troca-admin.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { CupomComponent } from './cupom/cupom.component';
import {MultiSelectModule} from 'primeng/multiselect';

// primeng modules
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {TableModule} from 'primeng/table';
import {InputMaskModule} from 'primeng/inputmask';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CardModule} from 'primeng/card';
import {TabMenuModule} from 'primeng/tabmenu';
import {KeyFilterModule} from 'primeng/keyfilter';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {SelectButtonModule} from 'primeng/selectbutton';
import {PasswordModule} from 'primeng/password';
import {ContextMenuModule} from 'primeng/contextmenu';
import {MenubarModule} from 'primeng/menubar';
import {StepsModule} from 'primeng/steps';
import {AccordionModule} from 'primeng/accordion';
import {ChartModule} from 'primeng/chart';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {DialogModule} from 'primeng/dialog';
import {MenuModule} from 'primeng/menu';
import {FieldsetModule} from 'primeng/fieldset';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {CalendarModule} from 'primeng/calendar';
import { ErroComponent } from './erro/erro.component';
import { DetalhePedidoComponent } from './detalhe-pedido/detalhe-pedido.component';
import { ResumoCompraComponent } from './Venda/resumo-compra/resumo-compra.component';
import { NovaEntregaComponent } from './Venda/nova-entrega/nova-entrega.component';
import { NovoCartaoComponent } from './Venda/novo-cartao/novo-cartao.component';
import {CheckboxModule} from 'primeng/checkbox';
import {SpinnerModule} from 'primeng/spinner';

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
    PedidosUsuarioComponent,
    TrocaAdminComponent,
    GraficoComponent,
    CompraComponent,
    CupomComponent,
    EditProdutoComponent,
    EditEstoqueComponent,
    ConfCompraComponent,
    ConfCadastroComponent,
    CadTelefoneComponent,
    EditUsuarioComponent,
    EditCadastroComponent,
    EditCartaoComponent,
    EditEnderecoComponent,
    EditTelefoneComponent,
    ErroComponent,
    DetalhePedidoComponent,
    ResumoCompraComponent,
    NovaEntregaComponent,
    NovoCartaoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    //HttpClientInMemoryWebApiModule.forRoot(DataService),
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
    MultiSelectModule,
    KeyFilterModule,
    SelectButtonModule,
    InputTextareaModule,
    TabMenuModule,
    MenubarModule,
    StepsModule,
    AccordionModule,
    ChartModule,
    CheckboxModule,
    MessagesModule,
    MessageModule,
    FieldsetModule,
    DialogModule,
    MenuModule,
    ProgressSpinnerModule,
    ConfirmDialogModule,
    CalendarModule,
    SpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
