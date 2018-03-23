import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { Notificacao } from './notificacao.model';

import { Bd } from '../bd.service'

@Component({
  selector: 'app-envia-notificacoes',
  templateUrl: './envia-notificacoes.component.html',
  styleUrls: ['./envia-notificacoes.component.css']
})
export class EnviaNotificacoesComponent implements OnInit {


  private formulario: FormGroup = new FormGroup({
    'titulo': new FormControl(null),
    'texto': new FormControl(null)
  })


  constructor( private bd:Bd ) { }

  ngOnInit() {
  }

  public salvarNotificacao():void {
    let notificacao: Notificacao = new Notificacao(
      this.formulario.value.titulo,
      this.formulario.value.texto,
  )
  this.bd.saveNoficacao(notificacao)
    console.log('Salvando a notificação!!!')
  }

}
