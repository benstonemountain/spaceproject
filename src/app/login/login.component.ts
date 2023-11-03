import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent {

  loginform = this.loginFormBuilder.group({

    email: ['', [Validators.required]],
    password: ['', [Validators.required]]

  });

  constructor(private loginFormBuilder: FormBuilder, private httpClient: HttpClient, private router: Router) {}

  loginHandler() {
    console.log(this.loginform.value);
    const {email, password} = this.loginform.value;
    this.httpClient.post<any>("http://localhost:3000/login",{email, password}).subscribe(response => {localStorage.setItem("accessToken", response.accessToken); this.router.navigateByUrl("dashboard")});
    
  }



}
