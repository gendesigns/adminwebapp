import { Component, OnInit, NgModule, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Produto } from '../novo-produto/produto.model';

import { ProdutosService } from '../produtos.services';
import { TagDetalhesService } from '../../tag-detalhes/tag-detalhes.service';
import { ColecoesService } from '../../colecoes/colecoes.service';
import { UploadService } from '../../uploads/shared/upload.service';
import { Upload } from '../../uploads/shared/upload';

import { AngularFireDatabaseModule, AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase'
import { Auth } from '../../auth.service';
import { Bd } from '../../bd.service';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { TagDetalhes } from '../../tag-detalhes/tag-detalhes.model';


declare let jQuery: any;
declare let $: any

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css'],
  providers: [ ProdutosService ,ColecoesService, TagDetalhesService ]
})
export class EditarProdutoComponent implements OnInit {

  public p

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

  public get_image1: string
  public get_image2: string
  public get_image3: string
  public uploads
  public items
  
  // Models
  public term
  public updateImg

  public getProduto = []
  public pagina:string
  public id: string

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
  })

  constructor( 
      private route:ActivatedRoute,
      private auth:Auth, 
      private upSvc: UploadService, 
      private db:Bd,
      private produtosService: ProdutosService,
      private colecoesService: ColecoesService,
      private tagDetalhesService: TagDetalhesService,
  ) {
      
      this.route.queryParams.subscribe(param => {
        this.pagina = param.pagina
        this.id = param.id
      })
   }
 
  ngOnInit() {
    // GET Product
    this.produtosService.getProdutos().subscribe( products => {
      this.lista_produtos = products
      this.lista_produtos.forEach( (product) => {
        if(product.key == this.pagina){
          this.produtos.push(product)
        }
      })
      this.produtos.forEach( produto => {
        this.formulario.patchValue({ref: produto[this.id].ref})
        this.formulario.patchValue({category: produto[this.id].category})
        this.formulario.patchValue({family: produto[this.id].family})
        this.formulario.patchValue({collection: produto[this.id].collection})
        this.formulario.patchValue({tagsDetails: produto[this.id].tagsDetails})
        this.formulario.patchValue({image1: produto[this.id].image1})
        this.formulario.patchValue({image2: produto[this.id].image2})
        this.formulario.patchValue({image3: produto[this.id].image3})
        if(produto[this.id].status!=undefined){
          this.formulario.patchValue({status: produto[this.id].status})
        }else{
          this.formulario.patchValue({status: this.defaultStatus})
        }
        this.image1 = produto[this.id].image1
        this.image2 = produto[this.id].image2
        this.image3 = produto[this.id].image3

      })
    })
    
    // GET Categories
    // this.tagDetalhesService.getTagDetalhes().subscribe( tag => {
    //   this.lista_detalhes = tag
    // })
    // GET Categories

    // GET TagsDetalhes
    this.tagDetalhesService.getTagDetalhes().subscribe( tag => {
      this.lista_detalhes = tag
    })
    // GET TagsDetalhes

    // GET Collections
    this.colecoesService.getCollections().subscribe( collection => {
        this.lista_colecoes = collection
      })
    // GET Collections

    // GET User
    firebase.auth().onAuthStateChanged((user) => {
      this.author = user.email
    })
    // GET User

    // GET Upload
    this.uploads = this.upSvc.getUploads();
    this.uploads.subscribe((result) => {
      this.items = result
    });
    // GET Upload

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
    
    this.produtosService.updateProduto(this.id, product)
    .then(()=>{ 
      $('#sucesso').modal('show')
    })
    
  }

}
