import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadProdutoComponent } from './cad-produto/cad-produto.component';
import { CadUsuarioComponent } from './cad-usuario/cad-usuario.component';

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


@NgModule({
  declarations: [
    AppComponent,
    CadProdutoComponent,
    CadUsuarioComponent,
    MenuUsuarioComponent,

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
    DropdownModule,
    TableModule,
    InputMaskModule,
    RadioButtonModule,
    CardModule,
    KeyFilterModule,
    InputTextareaModule,
    TabMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
