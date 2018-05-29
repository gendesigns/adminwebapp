import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import * as firebase from 'firebase';
import { ColecoesService } from '../colecoes.service';
import { Colecao } from '../colecao.model';
import { Auth } from '../../auth.service';


@Component({
  selector: 'app-nova-colecao',
  templateUrl: './nova-colecao.component.html',
  styleUrls: ['./nova-colecao.component.css'],
  providers: [ ColecoesService ]
})
export class NovaColecaoComponent implements OnInit {

  public title: string;
  public author: string;
  public cretedAt: any;
  public disabled: boolean;

  public form: FormGroup = new FormGroup({
    'title': new FormControl(null),
  })


  constructor( auth: Auth, private colecoesSevice: ColecoesService , private formBuilder: FormBuilder ) {
    firebase.auth().onAuthStateChanged((user) => {this.author = user.email})
    this.cretedAt = Date.now();
   }

  ngOnInit() {}

  settingForm() {
    this.form = this.formBuilder.group({
      title: [null, Validators.required]
    })
  }

  newCollection() {
    let colecao = new Colecao(
      this.title = this.form.value.title,
      this.author,
      this.cretedAt,
      this.disabled = false
    )
    this.colecoesSevice.saveCollection(colecao)
    this.form.reset()
  }

}
