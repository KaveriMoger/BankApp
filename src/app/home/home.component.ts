import { Component, OnInit } from '@angular/core';
import {  SessionStorageService } from 'angular-web-storage';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor(private sessionStorage: SessionStorageService, private route: Router) { }

  ngOnInit() {
  }

  logout(){
    this.sessionStorage.remove('token')
    this.route.navigate(['/login']);
  }

}
