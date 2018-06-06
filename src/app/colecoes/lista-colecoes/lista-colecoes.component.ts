import { Component, OnInit, Input } from '@angular/core';
import { ColecoesService } from '../colecoes.service';

declare let jQuery: any;
declare let $: any

@Component({
  selector: 'app-lista-colecoes',
  templateUrl: './lista-colecoes.component.html',
  styleUrls: ['./lista-colecoes.component.css'],
  providers: [ ColecoesService ]
})
export class ListaColecoesComponent implements OnInit {

  public lista_colecoes = new Array<any>();
  public keyCollection: string;
  public title: string;
  public status: string;

  public getMsg: string

  public colecoes

  constructor( private colecoesSevice: ColecoesService ) {
    
    //Update All Products
    this.colecoes = this.colecoesSevice.getCollections()
    this.colecoes.subscribe(element => {
      element.forEach(elem => {
        // this.colecoesSevice.updateCollection(elem.key, 
        // {
        //   author: elem.author, 
        //   createdAt: elem.createdAt,
        //   title: elem.title,
        //   status:'Ativo'
        // })
        // console.log(elem.key)    
      });
      
    });

   }

  ngOnInit() {
    
    this.colecoesSevice.getCollections()
      .subscribe(data => {
        this.lista_colecoes = data
      }, error => { console.log(error) }
    )
  }

  msgRetorno(event){
    this.getMsg = event.msgSuccess
    $('#atualizaColecao').modal('hide');
    setTimeout(() =>{ 
      $('.alert').removeClass('hide')
      $('.alert').addClass('show')
    }, 500);
    setTimeout(() =>{ 
      $('.alert').removeClass('show')
      $('.alert').addClass('hide')
    }, 3000);
    
  }

  selectCollection(key, title, status) {
    this.keyCollection = key
    this.title = title
    this.status = status
  }

}
