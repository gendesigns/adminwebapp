import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase'

@Injectable()
export class ProdutosService {

  public name: string
  public author: string
  public createdAt: any

  public produtosRef: AngularFireList<any>;
  public produtos: Observable<any[]>;
  
  constructor(private db: AngularFireDatabase) { 

    this.produtosRef = db.list('produtos');
    this.produtos = this.produtosRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  getProdutos(): Observable<any>{
    return this.produtos
  }
  saveProduto(produto) {
    this.produtosRef.push(produto)
    .then(res => {})
  }
  updateProduto(key, produto) {
    this.produtosRef.update(key, produto)
    .then(()=>{})
  }
  deleteProduto(key: string) {    
    this.produtosRef.remove(key)
  .then(res =>{})
  }

}
