import { Component, Input } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase'
import { Auth } from '../../../auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';


@Component({
  selector: 'app-pulseiras',
  templateUrl: './pulseiras.component.html',
  styleUrls: ['./pulseiras.component.css']
})
export class PulseirasComponent {

  @Input() searchPulseiras;

  public pPulseiras

  public selectedItem: string
  public itemTitle: string

  public itemsRef: AngularFireList<any>;
  public pulseiras: Observable<any[]>;
  
  constructor(private db: AngularFireDatabase, private auth: Auth) { 

    this.itemsRef = db.list('produtos/Pulseiras');
    this.pulseiras = this.itemsRef.snapshotChanges().map(changes => {
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
  updateItem(key: string, newText: string) {
    this.itemsRef.update(key, { text: newText });
  }
  deleteItem(key: string) {    
    this.itemsRef.remove(key); 
  }

}
