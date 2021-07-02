import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GetObservationsComponent } from './get-observations.component';

describe('GetObservationsComponent', () => {
  let component: GetObservationsComponent;
  let fixture: ComponentFixture<GetObservationsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GetObservationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetObservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
