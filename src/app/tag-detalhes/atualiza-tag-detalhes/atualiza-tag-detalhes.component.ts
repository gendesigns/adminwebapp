import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Auth } from '../../auth.service';
import { Observable } from 'rxjs/Observable';
import { TagDetalhes } from '../tag-detalhes.model';


@Component({
  selector: 'app-atualiza-tag-detalhes',
  templateUrl: './atualiza-tag-detalhes.component.html',
  styleUrls: ['./atualiza-tag-detalhes.component.css']
})
export class AtualizaTagDetalhesComponent implements OnInit {

  @Input() keyTagDetalhes

  public name: string
  public author: string
  public createdAt: any
  public tagDetalhesRef: AngularFireList<any>;
  public tagDetalhes: Observable<any[]>;

  public form: FormGroup = new FormGroup({
    'name': new FormControl(null)
  })

  constructor(private db: AngularFireDatabase, private auth: Auth) { 
    this.tagDetalhesRef = db.list('categorias');
    this.tagDetalhes = this.tagDetalhesRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  ngOnInit() {
    firebase.auth().onAuthStateChanged((user) => {
      this.author = user.email
    })
  }

  updateTagDetalhes(key: string) {
    this.keyTagDetalhes = key
    this.createdAt = new Date()
    
    let tagDetalhes: TagDetalhes = new TagDetalhes(
      this.name = this.form.value.name,
      this.author,
      this.createdAt
    )
    this.tagDetalhesRef.update(this.keyTagDetalhes, tagDetalhes )
    .then(()=>{
      
    })
  }

}
