import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { Notificacao } from './notificacao.model';
import * as firebase from 'firebase'

import { Bd } from '../bd.service'

@Component({
  selector: 'app-envia-notificacoes',
  templateUrl: './envia-notificacoes.component.html',
  styleUrls: ['./envia-notificacoes.component.css']
})
export class EnviaNotificacoesComponent implements OnInit {

  public autor: string
  public dataHora: any
  public lida: boolean = false

  public formulario: FormGroup = new FormGroup({
    'titulo': new FormControl(null),
    'texto': new FormControl(null)
  })


  constructor( private bd:Bd ) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged((user) => {
      this.autor = user.email
      this.dataHora = Date.now();
    })
  }

  public salvarNotificacao():void {
    let notificacao: Notificacao = new Notificacao(
      this.formulario.value.titulo,
      this.formulario.value.texto,
      this.autor,
      this.dataHora,
      this.lida
    )
    this.bd.enviaNoficacao(notificacao)
    this.inputClean()
  }

  public inputClean() {
    this.formulario.reset({titulo: '' })
    this.formulario.reset({texto: '' })
  }

}
