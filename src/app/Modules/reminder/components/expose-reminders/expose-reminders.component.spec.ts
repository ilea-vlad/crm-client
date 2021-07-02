import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExposeRemindersComponent } from './expose-reminders.component';

describe('ExposeRemindersComponent', () => {
  let component: ExposeRemindersComponent;
  let fixture: ComponentFixture<ExposeRemindersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExposeRemindersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExposeRemindersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
