import { Injectable, ChangeDetectionStrategy } from '@angular/core';
import * as firebase from 'firebase'
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { resolve } from 'url';
import { element } from 'protractor';

@Injectable()
export class Bd {
    
    public db: any

    public usuarios: Observable<any[]>
    public emails: Array<any> = ['douglasarts@gmail.com', 'mirianmota@gmail.com']
    public results: any
    public email: any

    constructor(db: AngularFireDatabase) {
        this.usuarios = db.list('usuario_detalhe').valueChanges();
        this.usuarios.subscribe(result => { 
             this.results = result
        })
    }

    public enviaNoficacao(notificacao: any): void{
        let titulo = notificacao.titulo

        this.emails.forEach(usuario => {
            firebase.database().ref(`notificacoes/${btoa(usuario)}/${titulo}`)
                .set({ 
                        titulo: notificacao.titulo, 
                        texto: notificacao.texto, 
                        autor: notificacao.autor, 
                        dataHora: notificacao.dataHora,
                        lida: notificacao.lida
                    })

        });
    }

}