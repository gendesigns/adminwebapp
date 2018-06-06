import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import * as firebase from 'firebase';
import { ColecoesService } from '../colecoes.service';
import { Colecao } from '../colecao.model';
import { Auth } from '../../auth.service';
import { emit } from 'cluster';

@Component({
  selector: 'app-atualiza-colecao',
  templateUrl: './atualiza-colecao.component.html',
  styleUrls: ['./atualiza-colecao.component.css']
})
export class AtualizaColecaoComponent implements OnInit {
  
  @Input() keyCollection;
  @Input() title;
  @Input() status;

  @Output() msgRetorno = new EventEmitter();

  public author: string;
  public createdAt: any;
  public colecoes: any;

  public getMsg: string;

  public listaStatus = ['Ativo', 'Inativo']

  public form: FormGroup = new FormGroup({
    'title': new FormControl(null),
    'status': new FormControl(null)
  })

  constructor( auth: Auth, private colecoesSevice: ColecoesService ) {

    firebase.auth().onAuthStateChanged((user) => {this.author = user.email})
    
  }

  ngOnInit() {
    
  }
 
  updateCollection(key) {
    this.createdAt = Date.now();

    let colecao = new Colecao(
      this.title = this.form.value.title,
      this.author,
      this.createdAt,
      this.status = this.form.value.status
      
    )
    this.colecoesSevice.updateCollection(key, colecao)
    .then(()=>{
      this.getMsg = `A coleção ${ colecao.title }, foi atualizada com sucesso!`
      this.msgRetorno.emit({msgSuccess: this.getMsg})
    })
  }

}
