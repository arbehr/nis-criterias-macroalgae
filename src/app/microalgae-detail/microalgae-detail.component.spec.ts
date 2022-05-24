import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroalgaeDetailComponent } from './microalgae-detail.component';

describe('MicroalgaeDetailComponent', () => {
  let component: MicroalgaeDetailComponent;
  let fixture: ComponentFixture<MicroalgaeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicroalgaeDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroalgaeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
