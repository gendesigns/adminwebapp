import { Component, OnInit, NgModule } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Produto } from './produto.model';

import { TagDetalhesService } from '../../tag-detalhes/tag-detalhes.service';
import { ColecoesService } from '../../colecoes/colecoes.service';
import { UploadService } from '../../uploads/shared/upload.service';
import { Upload } from '../../uploads/shared/upload';

import { AngularFireDatabaseModule, AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase'
import { Auth } from '../../auth.service';
import { ProdutosService } from '../produtos.services';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { TagDetalhes } from '../../tag-detalhes/tag-detalhes.model';



declare let jQuery: any;
declare let $: any

@Component({
  selector: 'app-novo-produto',
  templateUrl: './novo-produto.component.html',
  styleUrls: ['./novo-produto.component.css'],
  providers: [ ProdutosService, ColecoesService, TagDetalhesService ]
})
export class NovoProdutoComponent implements OnInit {

  public ref: string
  public category: string
  public family: string
  public collection: string
  public image1: string
  public image2: string
  public image3: string
  public author: string
  public status: string
  public createdAt
  public tagsDetails: Array<any> = []
  public produtos = new Array<any>();
  public lista_produtos = new Array<any>();
  public lista_colecoes = new Array<any>();
  public lista_detalhes = new Array<any>();
  public defaultStatus = 'Ativo'
  public lista_status = ['Ativo', 'Inativo']
  public lista_familias = [
      {title:"Folheado a Ouro Amarelo 18k"},
      {title:"Folheado a Rhodium"},
      {title:"Prata"},
      {title:"Aço"}
    ]
  public lista_categorias = [
    {title:"Anéis"},
    {title:"Brincos"},
    {title:"Colares"},
    {title:"Pingentes"},
    {title:"Pulseiras"},
  ]

  public p
  public get_image1: string
  public get_image2: string
  public get_image3: string
  public uploads
  public items
  
  // Models
  public imgContent
  public term
  public updateImg
  public addTagPromise

  public formulario: FormGroup = new FormGroup({
    'ref': new FormControl(null),
    'category': new FormControl(null),
    'family': new FormControl(null),
    'collection': new FormControl(null),
    'tagsDetails': new FormControl(null),
    'image1': new FormControl(null),
    'image2': new FormControl(null),
    'image3': new FormControl(null),
    'status': new FormControl(null),
    'author': new FormControl(null)
  })

  constructor( 
      private auth:Auth, 
      private upSvc: UploadService, 
      private produtoService:ProdutosService,
      private colecoesService: ColecoesService,
      private tagDetalhesService: TagDetalhesService,
      private dataService: TagDetalhesService
  ) {
      this.tagDetalhesService.getTagDetalhes().subscribe( tag => {
        this.lista_detalhes = tag
      })
   }
 
  ngOnInit() {

    // GET Collections
    this.colecoesService.getCollections()
      .subscribe(data => {
        this.lista_colecoes = data
      }, error => { console.log(error) }
    )
    // GET Collections

  
    // GET User
    firebase.auth().onAuthStateChanged((user) => {
      this.author = user.email
    })
    // GET User

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
    this.createdAt = new Date()
    this.get_image1 = $('#image1').val();
    this.get_image2 = $('#image2').val();
    this.get_image3 = $('#image3').val();
    
    let product: Produto = new Produto(
      this.ref = this.formulario.value.ref,
      this.category = this.formulario.value.category,
      this.family = this.formulario.value.family,
      this.collection = this.formulario.value.collection,
      this.tagsDetails =  this.formulario.value.tagsDetails,
      this.image1 = this.get_image1, 
      this.image2 = this.get_image2, 
      this.image3 = this.get_image3, 
      this.status = this.formulario.value.status,
      this.author = this.author,
      this.createdAt = this.createdAt
    )
    console.log(product)
    this.produtoService.saveProduto(product)
    this.resetForm()
    
  }

  public resetForm():void {
    this.formulario.reset() 
    $( "#ref" ).focus();
    $('.image').html('<a class="btn btn-success" style="width:25px;height:25px; padding:0"><i class="fas fa-plus"></i></a>');
  }

}
