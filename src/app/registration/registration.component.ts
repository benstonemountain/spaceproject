import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})


export class RegistrationComponent {

  registrationFormGroup = this.registrationFormBuilder.group({
    
    firstname: [,[Validators.required]],
    lastname: [,[Validators.required]],
    username: [,[Validators.required]],
    email: [,[Validators.required]],
    select: ['Gender',[Validators.required]],
    password: [,[Validators.required]],
    confirmpassword: [,[Validators.required]],

  });

  constructor(private registrationFormBuilder: FormBuilder,
    private httpClient: HttpClient, private router: Router) {}

  registerHandler() {
    console.log(this.registrationFormGroup.value);
    const {email, password} = this.registrationFormGroup.value;
    this.httpClient.post<any>("http://localhost:3000/register",{email, password}).subscribe(response => {localStorage.setItem("accessToken", response.accessToken); this.router.navigateByUrl("dashboard")});
    
  }

}
