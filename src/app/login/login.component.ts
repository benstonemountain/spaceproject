import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent {

  loginform = this.loginFormBuilder.group({

    usernameControl: ['', [Validators.required]],
    passwordControl: ['', [Validators.required]]

  });

  constructor(private loginFormBuilder: FormBuilder) {}

  showValue() {
    console.log(this.loginform.controls.usernameControl.errors)
    console.log(this.loginform.controls.passwordControl.errors)
  }

}
