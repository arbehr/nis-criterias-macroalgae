import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacroalgaeDetailComponent } from './macroalgae-detail.component';

describe('MacroalgaeDetailComponent', () => {
  let component: MacroalgaeDetailComponent;
  let fixture: ComponentFixture<MacroalgaeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MacroalgaeDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MacroalgaeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
