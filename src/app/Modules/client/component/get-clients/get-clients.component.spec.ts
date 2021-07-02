import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GetClientsComponent } from './get-clients.component';

describe('GetClientsComponent', () => {
  let component: GetClientsComponent;
  let fixture: ComponentFixture<GetClientsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GetClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
