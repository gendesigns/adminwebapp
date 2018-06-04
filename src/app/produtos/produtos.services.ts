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
  
  constructor(private db: AngularFireDatabase) { }

  getProdutos(): Observable<any>{
    this.produtosRef = this.db.list('produtos');
    return this.produtos = this.produtosRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }
  saveProduto(produto) {
    this.db.list(`produtos/${produto.category}`).push(produto)
    .then(res => {})
  }
  updateProduto(key, produto): Promise<any>{
    return this.db.list(`produtos/${produto.category}`).set(key, produto)
    .then(res => {})
  }
  deleteProduto(key: string) {    
    return this.db.list('produtos').remove(key)
    .then(res => {})
  }

}
