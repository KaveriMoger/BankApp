import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,  Validators } from '@angular/forms';
import { AuthService } from "../auth.service"
import {  SessionStorageService } from 'angular-web-storage';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private authService: AuthService,
              private sessionStorage: SessionStorageService, private route: Router) { }
  loginForm:FormGroup

  ngOnInit() {
     this.init()
  }

  init(){
    this.loginForm = this.formBuilder.group({
         email: ['', Validators.required],
         password: ['', Validators.required]
    });
  }


  onSubmit(loginValue){
    console.log(loginValue)
    if (this.loginForm.invalid) {
      console.log("asad")
      return true
    }
    this.authService.login(loginValue).subscribe((data) => {
      this.sessionStorage.set("token", data.token)
      console.log(data);
    })
    this.route.navigate(['/home'])
  }

  logout(){
    this.sessionStorage.remove('token')
    this.route.navigate(['/login']);
  }

}
