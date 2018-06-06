import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase'
import { Colecao } from './colecao.model';

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
  // saveCollection(collection): Promise<any> {
  //   return this.collectionRef.push(collection)
  // }
  saveCollection(collection) {
    return this.collectionRef.push(collection)
  }
  updateCollection(key, colecao): Promise<any> {
    return this.collectionRef.set(key, colecao)
  }
  deleteCollection(key: string) {    
    this.collectionRef.remove(key)
  .then(res =>{/*console.log('categoria deletada com sucesso!')*/})
  }

}
