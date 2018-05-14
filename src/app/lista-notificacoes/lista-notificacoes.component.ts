import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase'
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'app-lista-notificacoes',
  templateUrl: './lista-notificacoes.component.html',
  styleUrls: ['./lista-notificacoes.component.css']
})
export class ListaNotificacoesComponent {

  public itemsRef: AngularFireList<any>;
  public itemsRef2: AngularFireList<any>;
  public notificacoes: Observable<any[]>;
  public notificacoes2: Observable<any[]>;

  public keySelected
  
  constructor(private db: AngularFireDatabase) { 

    this.itemsRef = db.list('notificacoes/ZG91Z2xhc2FydHNAZ21haWwuY29t');
    this.itemsRef2 = db.list('notificacoes/');
    // Use snapshotChanges().map() to store the key
    this.notificacoes = this.itemsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });

    this.notificacoes2 = this.itemsRef2.snapshotChanges()

  }
  deleteItem(key: string) {    
    this.keySelected = key
    
    this.notificacoes2.forEach((userKey) => {
      let usersKeys: Array<any> = []
      for(let key in userKey){
        usersKeys = userKey[key].key
        this.itemsRef2.remove(`${usersKeys}/${this.keySelected}`); 
      }
    })
    
    // this.itemsRef.remove(key); 
  }

}
