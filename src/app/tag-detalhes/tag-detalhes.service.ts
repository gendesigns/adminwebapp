import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase'

@Injectable()
export class TagDetalhesService {

  public name: string
  public author: string
  public createdAt: any

  public tagDetalhesRef: AngularFireList<any>;
  public tagDetalhes: Observable<any[]>;
  
  constructor(private db: AngularFireDatabase) { 

    this.tagDetalhesRef = db.list('tags-detalhes/');
    this.tagDetalhes = this.tagDetalhesRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
    
  }

  getTagDetalhes(): Observable<any>{
    return this.tagDetalhes
  }
  saveTagDetalhes(tagDetalhes) {
    this.tagDetalhesRef.push(tagDetalhes)
    .then(res => {})
  }
  updateTagDetalhes(key, tagDetalhes) {
    this.tagDetalhesRef.update(key, tagDetalhes)
    .then(()=>{})
  }
  deleteTagDetalhes(key: string) {    
    this.tagDetalhesRef.remove(key)
  .then(res =>{})
  }

}
