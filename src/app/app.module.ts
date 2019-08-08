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
    MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
