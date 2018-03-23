import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ListaNotificacoesComponent } from './lista-notificacoes/lista-notificacoes.component';
import { EnviaNotificacoesComponent } from './envia-notificacoes/envia-notificacoes.component';
import { ListaProdutosComponent } from './produtos/lista-produtos/lista-produtos.component';
import { NovoProdutoComponent } from './produtos/novo-produto/novo-produto.component';
import { ListaCategoriasComponent } from './categorias/lista-categorias/lista-categorias.component';
import { NovaCategoriaComponent } from './categorias/nova-categoria/nova-categoria.component';
import { ListaUsuariosComponent } from './usuarios/lista-usuarios/lista-usuarios.component';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'notificacoes', component: ListaNotificacoesComponent },
  { path: 'add-notificacao', component: EnviaNotificacoesComponent},
  { path: 'produtos', component: ListaProdutosComponent},
  { path: 'produtos/novo-produto', component: NovoProdutoComponent},
  { path: 'categorias', component: ListaCategoriasComponent},
  { path: 'categorias/nova-categoria', component: NovaCategoriaComponent},
  { path: 'usuarios', component: ListaUsuariosComponent},  
  { path: 'biblioteca', component: BibliotecaComponent},  
  //{ path: 'login', component: LoginComponent},
  { path: '', component: LoginComponent}  
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }