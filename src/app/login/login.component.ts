import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

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

  constructor( private auth: Auth, private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.configuraFormulario()
  }

  configuraFormulario() {
    this.formulario = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    })
  }

  public autenticar(): void {
    this.auth.autenticar(
      this.formulario.value.email, 
      this.formulario.value.password
    )
  }

}
