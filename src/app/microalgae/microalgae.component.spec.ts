import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroalgaeComponent } from './microalgae.component';

describe('MicroalgaeComponent', () => {
  let component: MicroalgaeComponent;
  let fixture: ComponentFixture<MicroalgaeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicroalgaeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroalgaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
