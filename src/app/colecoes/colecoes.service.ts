import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase'

@Injectable()
export class ColecoesService {

  public name: string
  public author: string
  public createdAt: any

  public collectionRef: AngularFireList<any>;
  public collections: Observable<any[]>;
  
  constructor(private db: AngularFireDatabase) { 

    this.collectionRef = db.list('colecoes');
    this.collections = this.collectionRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
    
  }

  getCollections(): Observable<any>{
    return this.collections
  }
  saveCollection(collection) {
    this.collectionRef.push(collection)
    .then(res => {
      // console.log("Coleção cadastrada com sucesso!")
    })
  }
  updateCollection(key, colecao) {
    // console.log(key, colecao)
    this.collectionRef.update(key, colecao)
    .then(()=>{
      // console.log('Categoria atualizada:', colecao)
    })
  }
  deleteCollection(key: string) {    
    this.collectionRef.remove(key)
  .then(res =>{/*console.log('categoria deletada com sucesso!')*/})
  }

}
