import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { EnviaNotificacoesComponent } from './envia-notificacoes/envia-notificacoes.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListaNotificacoesComponent } from './lista-notificacoes/lista-notificacoes.component';
import { AppRoutingModule } from './/app-routing.module';
import { ListaCategoriasComponent } from './categorias/lista-categorias/lista-categorias.component';
import { NovaCategoriaComponent } from './categorias/nova-categoria/nova-categoria.component';
import { ListaProdutosComponent } from './produtos/lista-produtos/lista-produtos.component';
import { NovoProdutoComponent } from './produtos/novo-produto/novo-produto.component';
import { ListaUsuariosComponent } from './usuarios/lista-usuarios/lista-usuarios.component';
import { HomeComponent } from './home/home.component';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';


@NgModule({
  declarations: [
    AppComponent,
    EnviaNotificacoesComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    ListaNotificacoesComponent,
    ListaCategoriasComponent,
    NovaCategoriaComponent,
    ListaProdutosComponent,
    NovoProdutoComponent,
    ListaUsuariosComponent,
    HomeComponent,
    BibliotecaComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
