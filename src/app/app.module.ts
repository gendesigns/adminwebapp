import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EnviaNotificacoesComponent } from './envia-notificacoes/envia-notificacoes.component';


@NgModule({
  declarations: [
    AppComponent,
    EnviaNotificacoesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
