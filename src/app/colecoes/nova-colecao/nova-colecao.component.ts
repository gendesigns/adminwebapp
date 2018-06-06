import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import * as firebase from 'firebase';
import { ColecoesService } from '../colecoes.service';
import { Colecao } from '../colecao.model';
import { Auth } from '../../auth.service';
import { emit } from 'cluster';


@Component({
  selector: 'app-nova-colecao',
  templateUrl: './nova-colecao.component.html',
  styleUrls: ['./nova-colecao.component.css'],
  providers: [ ColecoesService ]
})
export class NovaColecaoComponent implements OnInit {
  
  @Output() msgRetorno = new EventEmitter();

  public title: string;
  public author: string;
  public cretedAt: any;
  public status: boolean;

  public getMsg: string;

  public listaStatus = ['Ativo', 'Inativo']
  public statusDefault = "Ativo"

  public form: FormGroup = new FormGroup({
    'title': new FormControl(null),
    'status': new FormControl(null)
  })


  constructor( auth: Auth, private colecoesSevice: ColecoesService , private formBuilder: FormBuilder ) {
    firebase.auth().onAuthStateChanged((user) => {this.author = user.email})
   }

  ngOnInit() {}

  settingForm() {
    this.form = this.formBuilder.group({
      title: [null, Validators.required]
    })
  }

  newCollection() {
    this.cretedAt = Date.now();

    let colecao = new Colecao(
      this.title = this.form.value.title,
      this.author,
      this.cretedAt,
      this.status = this.form.value.status
    )
    this.colecoesSevice.saveCollection(colecao)
    .then(res => {
      this.getMsg = `A coleção ${ colecao.title }, foi cadastrada com sucesso!`
      this.msgRetorno.emit({ msgSuccess: this.getMsg })
    })
    this.form.reset()
  }

}
