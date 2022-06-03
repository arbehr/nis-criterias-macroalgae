import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacroalgaeVerifyComponent } from './macroalgae-verify.component';

describe('MacroalgaeVerifyComponent', () => {
  let component: MacroalgaeVerifyComponent;
  let fixture: ComponentFixture<MacroalgaeVerifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MacroalgaeVerifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MacroalgaeVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
