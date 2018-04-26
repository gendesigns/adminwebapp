import { Component, Input } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase'
import { Auth } from '../../../auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'app-aneis',
  templateUrl: './aneis.component.html',
  styleUrls: ['./aneis.component.css']
})
export class AneisComponent {

  @Input() searchAneis;

  public itemsRef: AngularFireList<any>;
  public aneis: Observable<any[]>;
  
  constructor(private db: AngularFireDatabase, private auth: Auth) { 

    this.itemsRef = db.list('produtos/Anéis');
    // Use snapshotChanges().map() to store the key
    this.aneis = this.itemsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
    
  }

  addItem(newName: string) {
    this.itemsRef.push({ text: newName });
  }
  updateItem(key: string, newText: string) {
    this.itemsRef.update(key, { text: newText });
  }
  deleteItem(key: string) {    
    // this.itemsRef.remove(key); 
    console.log(key)
  }
  deleteEverything() {
    // this.itemsRef.remove();
  }

}
