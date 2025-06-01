import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZimmerComponent } from './zimmer.component';

describe('ZimmerComponent', () => {
  let component: ZimmerComponent;
  let fixture: ComponentFixture<ZimmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZimmerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
