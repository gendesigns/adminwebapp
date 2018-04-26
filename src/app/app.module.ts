import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from '@angular/forms';

import { NgSelectModule } from '@ng-select/ng-select';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';

import { FirebaseConfig } from './../environments/firebase.config';
import { Bd } from './bd.service'

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
import { Auth } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { DropZoneDirective } from './drop-zone.directive';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FileSizePipe } from './file-size.pipe';

import { UploadModule } from './uploads/shared/upload.module';
import { UploadService } from './uploads/shared/upload.service';

import { BrincosComponent } from './produtos/lista-produtos/brincos/brincos.component';
import { AneisComponent } from './produtos/lista-produtos/aneis/aneis.component';
import { ColaresComponent } from './produtos/lista-produtos/colares/colares.component';
import { PingentesComponent } from './produtos/lista-produtos/pingentes/pingentes.component';
import { PulseirasComponent } from './produtos/lista-produtos/pulseiras/pulseiras.component';
import { AtualizaCategoriaComponent } from './categorias/atualiza-categoria/atualiza-categoria.component';


// import { UploadService } from './uploads/shared/upload.service';



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
    BibliotecaComponent,
    DropZoneDirective,
    FileUploadComponent,
    FileSizePipe,
    BrincosComponent,
    AneisComponent,
    ColaresComponent,
    PingentesComponent,
    PulseirasComponent,
    AtualizaCategoriaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    AppRoutingModule,
    NgxPaginationModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    Ng2SearchPipeModule,
    AngularFireModule.initializeApp(FirebaseConfig)
  ],
  providers: [Auth, AuthGuard, Bd, UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
