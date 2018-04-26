import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase'
import { Auth } from '../../auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Categoria } from '../nova-categoria/categoria.model';

@Component({
  selector: 'app-atualiza-categoria',
  templateUrl: './atualiza-categoria.component.html',
  styleUrls: ['./atualiza-categoria.component.css']
})
export class AtualizaCategoriaComponent implements OnInit {

  @Input() keyCategoria

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

  updateItem(key: string) {
    let categoria: Categoria = new Categoria(
      this.name = this.formulario.value.name,
      this.author,
      this.createdAt
    )
    this.keyCategoria = key
    this.itemsRef.update(this.keyCategoria, categoria )
    .then(()=>{
      console.log('Categoria atualizada:', categoria)
    })
  }

}
