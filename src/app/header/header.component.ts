import { Component, OnInit } from '@angular/core';
import { Auth } from '../auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private auth:Auth ) { }
  ngOnInit() {
  }

  public sair() {
    this.auth.sair();
  }

}
