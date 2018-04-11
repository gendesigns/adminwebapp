import { Component, OnInit, NgModule } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Produto } from './produto.model';

import { UploadService } from '../../uploads/shared/upload.service';
import { Upload } from '../../uploads/shared/upload';

import { AngularFireDatabaseModule, AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase'
import { Auth } from '../../auth.service';
import { Bd } from '../../bd.service';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';



declare let jQuery: any;
declare let $: any

@Component({
  selector: 'app-novo-produto',
  templateUrl: './novo-produto.component.html',
  styleUrls: ['./novo-produto.component.css']
})
export class NovoProdutoComponent implements OnInit {

  public saveUsername: boolean = false;
  public ref: string
  public category: string
  public family: string
  public collection: string
  public tagsDetails: Array<any>
  public image1: string
  public image2: string
  public image3: string
  public disabledProduct: boolean
  public author: string
  public createdAt

  public get_image1: string
  public get_image2: string
  public get_image3: string
  public uploads
  public items

  public formulario: FormGroup = new FormGroup({
    'ref': new FormControl('', Validators.required),
    'category': new FormControl('', Validators.required),
    'family': new FormControl('', Validators.required),
    'collection': new FormControl('', Validators.required),
    'tags': new FormControl('', Validators.required),
    'image1': new FormControl('', Validators.required),
    'image2': new FormControl('', Validators.required),
    'image3': new FormControl('', Validators.required),
    'disabledProduct': new FormControl('', Validators.required),
    'author': new FormControl('', Validators.required)
  })

  constructor( private auth:Auth, private upSvc: UploadService, private db:Bd ) { }
  
  selectedCompanyCustomPromise: any
  tags: any[] = [];
  loading = false;
  tagsNames = [
    'Zircônia',
    'Zircônias',
    'Cristal',
    'Cristais',
    'Pedra Verde',
    'Pedra Preta',
    'Anel ajustável',
    'Ear Jacket',
    'Ear Cuff',
    'Piercing',
    'Aplicação de Rhodium Negro',
    'Pedra Nude',
    'Ajustável',
    'Gargantilha',
    'Gargantilha com Pingente',
    'Gravata',
    'Perolas Sintéticas',
    'Escapulario',
    'Cordão'
  ];

  addTag(name) {
      return { name: name, tag: true };
  }

  ngOnInit() {
    
    firebase.auth().onAuthStateChanged((user) => {
      this.author = user.email
      this.createdAt = new Date()
    })

    this.tagsNames.forEach((c, i) => {
        this.tags.push({ id: i, name: c });
    });

    $(document).on('click', '.image', function () {
      var data_box = $(this).attr('data-box');
      $('#data-box').val(data_box);
      if ($(this).find('img')) {
        var img_atual = $(this).find('img').attr('src');
        $('input[name=img] + img').each(function(){
          if($(this).attr('src') == img_atual){
            $(this).prev().prop("checked", true);
          }
        })
      }
    })

    this.uploads = this.upSvc.getUploads();
    this.uploads.subscribe((result) => {
      this.items = result
    });
    
    $(document).on('click', '.btn-save', function () {
      var data_box = $('#biblioteca #data-box').val();
      var img = $("input[name=img]:checked + img").attr('src');
      $(`.image[data-box='`+data_box+`']`).html('<img src="' + img + '"/>');
      $('#image' + data_box + '').val(img);
      
      $('#biblioteca').modal('hide');
      
    })
  }

  public saveProduct():void {
    
    this.get_image1 = $('#image1').val();
    this.get_image2 = $('#image2').val();
    this.get_image3 = $('#image3').val();
    
    let product: Produto = new Produto(
      this.ref = this.formulario.value.ref,
      this.category = this.formulario.value.category,
      this.family = this.formulario.value.family,
      this.collection = this.formulario.value.collection,
      this.tagsDetails = this.formulario.value.tags,
      this.image1 = this.get_image1, 
      this.image2 = this.get_image2, 
      this.image3 = this.get_image3, 
      this.disabledProduct = this.saveUsername,
      this.author = this.author,
      this.createdAt
    )
    this.db.saveProductFb(product)
    // console.log(product)
    
  }

  public isDisabledProduct():void {
    if( this.saveUsername  == false ){
      this.saveUsername = true
    }else if( this.saveUsername  == true ){
      this.saveUsername = false 
    }
  }

}
