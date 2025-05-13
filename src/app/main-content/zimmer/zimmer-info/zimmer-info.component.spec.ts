import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZimmerInfoComponent } from './zimmer-info.component';

describe('ZimmerInfoComponent', () => {
  let component: ZimmerInfoComponent;
  let fixture: ComponentFixture<ZimmerInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZimmerInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZimmerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
