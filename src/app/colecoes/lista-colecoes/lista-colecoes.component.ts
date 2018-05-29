import { Component, OnInit, Input } from '@angular/core';
import { ColecoesService } from '../colecoes.service';

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
  public disabledInput: boolean;

  constructor( private colecoesSevice: ColecoesService ) { }

  ngOnInit() {
    this.colecoesSevice.getCollections()
      .subscribe(data => {
        this.lista_colecoes = data
      }, error => { console.log(error) }
    )
  }

  selectCollection(key, title, disabledInput) {
    this.keyCollection = key
    this.title = title
    this.disabledInput =  disabledInput
  }

}
