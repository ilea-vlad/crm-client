import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UpdateClientsComponent } from './update-clients.component';

describe('UpdateClientsComponent', () => {
  let component: UpdateClientsComponent;
  let fixture: ComponentFixture<UpdateClientsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
