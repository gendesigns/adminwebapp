import { Component, Input, OnInit } from '@angular/core';
import { ColecoesService } from '../colecoes.service';

@Component({
  selector: 'app-deletar-colecao',
  templateUrl: './deletar-colecao.component.html',
  styleUrls: ['./deletar-colecao.component.css']
})
export class DeletarColecaoComponent implements OnInit {
  
  @Input() keyCollection;
  @Input() title;

  constructor( private colecoesSevice: ColecoesService ) { }

  ngOnInit() {
  }

  deleteCollection(key) {
    this.colecoesSevice.deleteCollection(key)
  }

}
