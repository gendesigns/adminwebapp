import { Component, OnInit } from '@angular/core';
import { TagDetalhesService } from '../tag-detalhes.service';

@Component({
  selector: 'app-lista-tag-detalhes',
  templateUrl: './lista-tag-detalhes.component.html',
  styleUrls: ['./lista-tag-detalhes.component.css'],
  providers: [ TagDetalhesService ]
})
export class ListaTagDetalhesComponent implements OnInit {

  public lista_tag_detalhes = new Array<any>();
  public keyTagDetalhes: string;
  public title: string;

  constructor( private tagDetalhesService: TagDetalhesService) { }

  ngOnInit() {

    this.tagDetalhesService.getTagDetalhes()
      .subscribe(data => {
        this.lista_tag_detalhes = data
      }, error => { console.log(error) }
    )

  }

  selectTagDetalhes(key, title, disabledInput) {
    this.keyTagDetalhes = key
    this.title = title
  }

}
