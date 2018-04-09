import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Injectable()
export class Auth{

    public token_id: string

    constructor(private router: Router) {}


    public autenticar( email: string, senha: string) :Promise<any> {
        return firebase.auth().signInWithEmailAndPassword(email, senha)
            .then((resposta: any) => {
                firebase.auth().currentUser.getIdToken()
                    .then((idToken: string) => {
                        this.token_id = idToken
                        localStorage.setItem('idToken', idToken)
                        
                        this.router.navigate(['/add-notificacao'])
                        
                    })
            })
    }

  
    public autenticado(): boolean {
        
        if(this.token_id === undefined && localStorage.getItem('idToken') != null) {
            this.token_id = localStorage.getItem('idToken')            
        }

        if(this.token_id === undefined){
            this.router.navigate(['/'])
        }
        
        return this.token_id !== undefined
    }

    public sair(): void {
        firebase.auth().signOut()
            .then(() => {
                localStorage.removeItem('idToken')
                this.token_id = undefined
                this.router.navigate(['/'])
            })
    }
}