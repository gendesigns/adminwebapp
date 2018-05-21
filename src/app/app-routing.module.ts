import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard.service';

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
import { UploadFormComponent } from './uploads/upload-form/upload-form.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent , canActivate: [ AuthGuard ] },
  { path: 'notificacoes', component: ListaNotificacoesComponent, canActivate: [ AuthGuard ] },
  { path: 'add-notificacao', component: EnviaNotificacoesComponent, canActivate: [ AuthGuard ] },
  { path: 'produtos', component: ListaProdutosComponent, canActivate: [ AuthGuard ] },
  { path: 'produtos/novo-produto', component: NovoProdutoComponent, canActivate: [ AuthGuard ] },
  { path: 'categorias', component: ListaCategoriasComponent, canActivate: [ AuthGuard ] },
  { path: 'categorias/nova-categoria', component: NovaCategoriaComponent, canActivate: [ AuthGuard ] },
  { path: 'usuarios', component: ListaUsuariosComponent, canActivate: [ AuthGuard ] },  
  { path: 'biblioteca', component: BibliotecaComponent, canActivate: [ AuthGuard ] },  
  { path: 'uploads', loadChildren: './uploads/shared/upload.module#UploadModule' },
  //{ path: 'login', component: LoginComponent},
  { path: '', component: LoginComponent} 
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }