import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-retorno',
  templateUrl: './modal-retorno.component.html',
  styleUrls: ['./modal-retorno.component.css']
})
export class ModalRetornoComponent implements OnInit {

  @Input() tituloRetorno
  @Input() msgRetorno

  constructor() { }

  ngOnInit() {
  }

}
