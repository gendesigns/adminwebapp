import { Component, Input } from '@angular/core';

import { AngularFireDatabaseModule, AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase'
import { Auth } from '../../../auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { element } from 'protractor';

@Component({
  selector: 'app-aneis',
  templateUrl: './aneis.component.html',
  styleUrls: ['./aneis.component.css'],
})
export class AneisComponent {

  @Input() searchAneis;


  public keyAnel: string
  public pAneis

  public selectedItem: string
  public itemTitle: string

  public itemsRef: AngularFireList<any>;
  public aneis: Observable<any[]>;


  constructor(private db: AngularFireDatabase, private auth: Auth) { 

    this.itemsRef = db.list('produtos/Anéis');
    this.aneis = this.itemsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });    
    
  }
  
  selectItem(key:string, title:string){
    this.selectedItem = key
    this.itemTitle = title
  }

  addItem(newName: string) {
    this.itemsRef.push({ text: newName });
  }
  updateItem(key: string) {
    this.keyAnel = key
  }
  deleteItem(key: string) {    
    this.itemsRef.remove(key);
  }
 
}
