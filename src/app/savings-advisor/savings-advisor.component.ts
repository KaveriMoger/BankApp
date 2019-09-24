import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-savings-advisor',
  templateUrl: './savings-advisor.component.html',
  styleUrls: ['./savings-advisor.component.less']
})
export class SavingsAdvisorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  newCustomerActive(event: Event) {
    console.log(event);
    }

}
