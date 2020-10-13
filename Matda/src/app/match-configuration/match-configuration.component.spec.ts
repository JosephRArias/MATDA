import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchConfigurationComponent } from './match-configuration.component';

describe('MatchConfigurationComponent', () => {
  let component: MatchConfigurationComponent;
  let fixture: ComponentFixture<MatchConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchConfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
