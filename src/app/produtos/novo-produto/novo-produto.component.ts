import { Component, OnInit } from '@angular/core';

declare let jQuery: any;
declare let $: any

@Component({
  selector: 'app-novo-produto',
  templateUrl: './novo-produto.component.html',
  styleUrls: ['./novo-produto.component.css']
})
export class NovoProdutoComponent implements OnInit {


  constructor() { }

  ngOnInit() {
    $(document).on('click', '.image', function () {
      var data_box = $(this).attr('data-box');
      $('#data-box').val(data_box);
      if ($(this).find('img')) {
        var img_atual = $(this).find('img').attr('src');
        $('input[name=img] + img').each(function(){
          if($(this).attr('src') == img_atual){
            $(this).prev().prop("checked", true);
          }
        })
      }
    })
  }

}
