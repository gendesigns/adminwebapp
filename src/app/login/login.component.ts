import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

import { Auth } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formulario: FormGroup = new FormGroup({
    'email': new FormControl(null),
    'password': new FormControl(null)
  })

  constructor( private auth: Auth ) { }

  ngOnInit() {
  }

  public autenticar(): void {
    this.auth.autenticar(
      this.formulario.value.email, 
      this.formulario.value.password
    )
  }

}
