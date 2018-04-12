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

    public getProducts(): Promise<any> {
        
        return new Promise((resolve, reject) => {

            firebase.database().ref('produtos/Anéis')
            .once('value')
            .then((snapshot: any) => {
                
                let produtcs: Array<any> = []
                snapshot.forEach((childSnapshot: any) => {
                    let produtc = childSnapshot.val()
                    produtcs = produtc
                    console.log(produtcs)
                });
                
                // resolve(produtcs)    
            })
            
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

    public saveProductFb(product: any): void{
        let category = product.category
        let ref = product.ref

        
        console.log('Chegamos até p service: ', product)
        firebase.database().ref(`produtos/${category}`)
            .push({ 
                    ref: product.ref, 
                    category: product.category, 
                    family: product.family, 
                    collection: product.collection, 
                    tagsDetails: product.tagsDetails,
                    image1: product.image1,
                    image2: product.image2,
                    image3: product.image3,
                    disabledProduct: product.disabledProduct,
                    author: product.author,
                    createdAt: product.createdAt
                })
    }

}