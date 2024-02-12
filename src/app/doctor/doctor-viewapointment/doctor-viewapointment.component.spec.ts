import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorViewapointmentComponent } from './doctor-viewapointment.component';

describe('DoctorViewapointmentComponent', () => {
  let component: DoctorViewapointmentComponent;
  let fixture: ComponentFixture<DoctorViewapointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorViewapointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorViewapointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
