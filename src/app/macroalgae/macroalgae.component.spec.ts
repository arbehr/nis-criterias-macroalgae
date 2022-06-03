import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacroalgaeComponent } from './macroalgae.component';

describe('MaroalgaeComponent', () => {
  let component: MacroalgaeComponent;
  let fixture: ComponentFixture<MacroalgaeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MacroalgaeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MacroalgaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
