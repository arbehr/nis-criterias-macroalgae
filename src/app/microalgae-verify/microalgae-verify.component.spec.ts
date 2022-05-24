import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroalgaeVerifyComponent } from './microalgae-verify.component';

describe('MicroalgaeVerifyComponent', () => {
  let component: MicroalgaeVerifyComponent;
  let fixture: ComponentFixture<MicroalgaeVerifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicroalgaeVerifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroalgaeVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
