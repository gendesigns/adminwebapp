import { Injectable, ChangeDetectionStrategy } from '@angular/core';
import * as firebase from 'firebase'
import { resolve } from 'url';

@Injectable()
export class Bd {

    constructor() {}

    public saveNoficacao(notificacao: any): void{
        console.log('chegou até aqui:', notificacao)
        // firebase.database().ref('notificacoes')
        //     .push({ titulo: notificao.titulo, notificao: notificao.texto  })
        //     .then((notificao)=>{
        //         console.log()
        //     })
    }

}