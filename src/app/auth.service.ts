import { Injectable } from '@angular/core';
import {  SessionStorageService, SessionStorage } from 'angular-web-storage';
import { HttpClient, HttpHeaders} from "@angular/common/http"

import { Observable } from 'rxjs'
import { User } from './model/user';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private registerUrl = "http://localhost:3000/api/auth/createuser"
private loginUrl = "http://localhost:3000/api/auth/login";
 


  constructor(private http: HttpClient,
              private sessionStorage: SessionStorageService) { }

  login(user:User):Observable<any> {
    return this.http.post(this.loginUrl, user, httpOptions )
  }

  loggedIn() {
    let token = this.sessionStorage.get('token')
    if (token) {
      return true
    }
    return false
  }

  register(user:User):Observable<any> {
    return this.http.post(this.registerUrl, user, httpOptions)
  }


  getToken(){
  
  }
   
}
