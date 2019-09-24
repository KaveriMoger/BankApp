import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsAdvisorComponent } from './savings-advisor.component';

describe('SavingsAdvisorComponent', () => {
  let component: SavingsAdvisorComponent;
  let fixture: ComponentFixture<SavingsAdvisorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingsAdvisorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingsAdvisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
