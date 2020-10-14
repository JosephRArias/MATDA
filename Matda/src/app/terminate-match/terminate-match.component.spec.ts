import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminateMatchComponent } from './terminate-match.component';

describe('TerminateMatchComponent', () => {
  let component: TerminateMatchComponent;
  let fixture: ComponentFixture<TerminateMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminateMatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminateMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
