import { Component, OnInit } from '@angular/core';

declare let jQuery: any;
declare let $: any

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var altura = $(window).height();
    $('.container').css('min-height',altura+'px');
  }

}
