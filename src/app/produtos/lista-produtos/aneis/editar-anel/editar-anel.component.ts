import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import * as firebase from 'firebase';
import { ProdutosService } from '../../../produtos.services';
import { Produto } from '../../../novo-produto/produto.model';
import { Auth } from '../../../../auth.service';

@Component({
  selector: 'app-editar-anel',
  templateUrl: './editar-anel.component.html',
  styleUrls: ['./editar-anel.component.css'],
  providers: [ ProdutosService ]
})
export class EditarAnelComponent implements OnInit {

  @Input() keyAnel

  public produtos: any;

  public ref
  public category
  public family
  public collection
  public tagsDetails
  public image1
  public image2
  public image3
  public disabledProduct
  public author
  public createdAt

  public form: FormGroup = new FormGroup({
    'title': new FormControl(null),
    'ref': new FormControl(null),
    'category': new FormControl(null),
    'family': new FormControl(null),
    'collection': new FormControl(null),
    'tagsDetails': new FormControl(null),
    'image1': new FormControl(null),
    'image2': new FormControl(null),
    'image3': new FormControl(null),
    'disabledProduct': new FormControl(null),
    'author': new FormControl(null),
    'createdAt': new FormControl(null)
  })

  constructor( auth: Auth, private produtosService: ProdutosService , private formBuilder: FormBuilder ) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged((user) => {this.author = user.email})

    this.produtosService.getProdutos()
      .subscribe(data => {
        this.produtos = data
      }, error => { console.log(error) }
    )
  }

  updateProduto(key) {
    this.keyAnel = key
    this.createdAt = Date.now();

    let produto = new Produto(
      this.ref =  this.form.value.ref,
      this.category =  this.form.value.category,
      this.family =  this.form.value.family,
      this.collection =  this.form.value.collection,
      this.tagsDetails =  this.form.value.tagsDetails,
      this.image1 =  this.form.value.image1,
      this.image2 =  this.form.value.image1,
      this.image3 =  this.form.value.image3,
      this.disabledProduct =  this.form.value.disabledProduct,
      this.author,
      this.createdAt
    )
    
    console.log(produto)
    // this.produtosService.updateProduto(this.keyAnel, produto)
    
  }

}
