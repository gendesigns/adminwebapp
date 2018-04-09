import { Component, OnInit } from '@angular/core';

declare let jQuery: any;
declare let $: any

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.css']
})
export class BibliotecaComponent implements OnInit {

  constructor() { }

  public img = 'assets/img/130416.jpg';
  public img1 = 'assets/img/130415.jpg';
  public img2 = 'assets/img/512607.jpg';

  ngOnInit() {
    //$('#biblioteca').modal('show');
    
    $(document).on('click', '.btn-save', function () {
      var data_box = $('#biblioteca #data-box').val();
      var img = $("input[name=img]:checked + img").attr('src');
      $(`.image[data-box='`+data_box+`']`).html('<img src="' + img + '"/>');
      $('#biblioteca').modal('hide');
    })
  }
}
