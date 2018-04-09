import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import {NgxPaginationModule} from 'ngx-pagination'; 
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { HeaderUploadComponent } from '../../header-upload/header-upload.component';
import { FooterUploadComponent } from '../../footer-upload/footer-upload.component';

// import { SharedModule } from '../../shared/shared.module';

import { AngularFireDatabaseModule } from 'angularfire2/database';

import { UploadService } from './upload.service';

import { UploadFormComponent } from '../upload-form/upload-form.component';
import { UploadsListComponent } from '../uploads-list/uploads-list.component';
import { UploadDetailComponent } from '../upload-detail/upload-detail.component';

const routes: Routes = [
  { path: '', component: UploadsListComponent },
];

@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
    
    // SharedModule,
    AngularFireDatabaseModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    HeaderUploadComponent,
    FooterUploadComponent,
    UploadFormComponent,
    UploadsListComponent,
    UploadDetailComponent,
  ],
  providers: [
    UploadService,
  ],
})
export class UploadModule { }
