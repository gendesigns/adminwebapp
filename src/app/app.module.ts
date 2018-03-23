import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";

import { Bd } from './bd.service'

import { AppComponent } from './app.component';
import { EnviaNotificacoesComponent } from './envia-notificacoes/envia-notificacoes.component';




@NgModule({
  declarations: [
    AppComponent,
    EnviaNotificacoesComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [ Bd ],
  bootstrap: [AppComponent]
})
export class AppModule { }
