import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-envia-notificacoes',
  templateUrl: './envia-notificacoes.component.html',
  styleUrls: ['./envia-notificacoes.component.css']
})
export class EnviaNotificacoesComponent implements OnInit {

  private formulario: FormGroup = new FormGroup({
    'titulo': new FormControl(null),
    'mensagem': new FormControl(null)
  })


  constructor() { }

  ngOnInit() {
  }

  public salvarNotificacao():void {
  //   let notificacao: UpdateFieldsUsuario = new UpdateFieldsUsuario(
  //     this.formulario.value.displayName,
  //     this.formulario.value.telefone,
  //     this.formulario.value.cidade,
  //     this.formulario.value.estado,
  //     this.formulario.value.mensagem
  // )
    console.log('Salvando a notificação!!!')
  }

}
