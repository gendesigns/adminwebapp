import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase'
import { Auth } from '../../auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Categoria } from './categoria.model'


@Component({
  selector: 'app-nova-categoria',
  templateUrl: './nova-categoria.component.html',
  styleUrls: ['./nova-categoria.component.css']
})
export class NovaCategoriaComponent implements OnInit {

  public formulario: FormGroup = new FormGroup({
    'name': new FormControl(null)
  })

  public name: string
  public author: string
  public createdAt: any


  public itemsRef: AngularFireList<any>;
  public categorias: Observable<any[]>;
  
  constructor(private db: AngularFireDatabase, private auth: Auth) { 

    this.itemsRef = db.list('categorias');
    // Use snapshotChanges().map() to store the key
    this.categorias = this.itemsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
    
  }

  ngOnInit() {
    firebase.auth().onAuthStateChanged((user) => {
      this.author = user.email
      this.createdAt = new Date()
    })
  }

  addItem() {
    let categoria: Categoria = new Categoria(
      this.name = this.formulario.value.name,
      this.author,
      this.createdAt
    )
    
    this.itemsRef.push(categoria)
    .then(res=>{
      console.log(categoria)
      this.formulario.reset()
    })
  }
 
  deleteItem(key: string) {    
    // this.itemsRef.remove(key); 
    console.log(key)
  }
  deleteEverything() {
    // this.itemsRef.remove();
  }

}