import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AgentChartComponent } from './agent-chart.component';

describe('AgentChartComponent', () => {
  let component: AgentChartComponent;
  let fixture: ComponentFixture<AgentChartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
