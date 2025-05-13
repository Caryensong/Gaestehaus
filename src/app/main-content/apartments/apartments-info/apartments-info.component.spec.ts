import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentsInfoComponent } from './apartments-info.component';

describe('ApartmentsInfoComponent', () => {
  let component: ApartmentsInfoComponent;
  let fixture: ComponentFixture<ApartmentsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApartmentsInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApartmentsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
