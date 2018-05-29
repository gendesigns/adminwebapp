import { Component, Input, OnInit } from '@angular/core';
import { TagDetalhesService } from '../tag-detalhes.service';

@Component({
  selector: 'app-deletar-tag-detalhes',
  templateUrl: './deletar-tag-detalhes.component.html',
  styleUrls: ['./deletar-tag-detalhes.component.css']
})
export class DeletarTagDetalhesComponent implements OnInit {

  @Input() keyTagDetalhes;
  @Input() title;

  constructor( private tagDetalhesService: TagDetalhesService ) { }

  ngOnInit() {
  }

  deleteTagDetalhes(key) {
    this.tagDetalhesService.deleteTagDetalhes(key)
  }

}
