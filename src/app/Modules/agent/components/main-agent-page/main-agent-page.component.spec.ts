import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MainAgentPageComponent } from './main-agent-page.component';

describe('MainAgentPageComponent', () => {
  let component: MainAgentPageComponent;
  let fixture: ComponentFixture<MainAgentPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MainAgentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAgentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
