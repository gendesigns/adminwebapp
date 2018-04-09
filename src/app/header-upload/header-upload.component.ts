import { Component, OnInit } from '@angular/core';
import { Auth } from '../auth.service'

@Component({
  selector: 'app-header-upload',
  templateUrl: './header-upload.component.html',
  styleUrls: ['./header-upload.component.css']
})
export class HeaderUploadComponent implements OnInit {

  constructor( private auth:Auth ) { }

  ngOnInit() {
  }

  public sair() {
    this.auth.sair();
  }

}
