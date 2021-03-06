import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase'
import { Auth } from '../../auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'app-lista-categorias',
  templateUrl: './lista-categorias.component.html',
  styleUrls: ['./lista-categorias.component.css']
})
export class ListaCategoriasComponent {

  public formulario: FormGroup = new FormGroup({
    'name': new FormControl(null)
  })

  public name: string
  public author: string
  public createdAt: any

  public keyCategoria: string


  public itemsRef: AngularFireList<any>;
  public categorias: Observable<any[]>;
  
  constructor(private db: AngularFireDatabase, private auth: Auth) { 

    this.itemsRef = db.list('categorias');
    // Use snapshotChanges().map() to store the key
    this.categorias = this.itemsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
    
  }

  updateCategory(key) {
    this.keyCategoria = key
  }
  deleteItem(key: string) {    
    this.itemsRef.remove(key); 
    console.log(key)

  }
  deleteEverything() {
    // this.itemsRef.remove();
  }

}