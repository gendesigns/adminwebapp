import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import * as firebase from 'firebase';
import { TagDetalhesService } from '../tag-detalhes.service';
import { TagDetalhes } from '../tag-detalhes.model';
import { Auth } from '../../auth.service';


@Component({
  selector: 'app-nova-tag-detalhes',
  templateUrl: './nova-tag-detalhes.component.html',
  styleUrls: ['./nova-tag-detalhes.component.css'],
  providers: [ TagDetalhesService ]
})
export class NovaTagDetalhesComponent implements OnInit {

  public title: string;
  public author: string;
  public cretedAt: any;

  public form: FormGroup = new FormGroup({
    'title': new FormControl(null),
  })

  constructor( private tagDetalhesService: TagDetalhesService, auth: Auth, private formBuilder: FormBuilder ) { 
    firebase.auth().onAuthStateChanged((user) => {this.author = user.email})
    this.cretedAt = Date.now();
  }

  ngOnInit() {
  }

  settingForm() {
    this.form = this.formBuilder.group({
      title: [null, Validators.required]
    })
  }

  newTagDetalhes() {
    let tags_detalhe = new TagDetalhes(
      this.title = this.form.value.title,
      this.author,
      this.cretedAt
    )
    this.tagDetalhesService.saveTagDetalhes(tags_detalhe)
    this.form.reset()
  }

}
