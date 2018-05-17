import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { FotoComponent } from './foto/foto.component';
import { FotoModule } from './foto/foto.module';
import { PainelModule } from "./painel/painel.module";
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ModuloRoteador } from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    ListagemComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    FotoModule,
    HttpClientModule,
    FormsModule,
    PainelModule,
    ModuloRoteador
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
