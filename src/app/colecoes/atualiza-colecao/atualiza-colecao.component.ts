import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import * as firebase from 'firebase';
import { ColecoesService } from '../colecoes.service';
import { Colecao } from '../colecao.model';
import { Auth } from '../../auth.service';
import { element } from 'protractor';

declare let jQuery: any;
declare let $: any

@Component({
  selector: 'app-atualiza-colecao',
  templateUrl: './atualiza-colecao.component.html',
  styleUrls: ['./atualiza-colecao.component.css']
})
export class AtualizaColecaoComponent implements OnInit {
  
  @Input() keyCollection;
  @Input() title;
  @Input() disabledInput;

  public author: string;
  public cretedAt: any;
  public colecoes: any;
  public disabled: boolean
  public checkDisabled: boolean;
  public saveDisabled:boolean;


  public form: FormGroup = new FormGroup({
    'title': new FormControl(null),
    'disabled': new FormControl(null)
  })

  constructor( auth: Auth, private colecoesSevice: ColecoesService , private formBuilder: FormBuilder ) {
    firebase.auth().onAuthStateChanged((user) => {this.author = user.email})

    this.colecoesSevice.getCollections()
      .subscribe(data => {
        this.colecoes = data
      }, error => { console.log(error) }
    )
   }

  public onSaveDisabledChanged(value:boolean){
    this.saveDisabled = value;
  }

  ngOnInit() {
    
  }
 
  updateCollection(key, title, disabledInput) {
    this.keyCollection = key
    this.cretedAt = Date.now();

    if(this.saveDisabled==undefined){
      this.saveDisabled=disabledInput
    }else{
      this.saveDisabled=disabledInput
    }
    
    let colecao = new Colecao(
      this.title = title,
      this.author,
      this.cretedAt,
      this.disabledInput = this.saveDisabled
      
    )
    
    this.colecoesSevice.updateCollection(this.keyCollection, colecao)
    
    // this.form.reset()
  }

}
