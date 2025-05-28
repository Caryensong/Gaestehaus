import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-apartments-info',
  imports: [CommonModule],
  standalone:true,
  templateUrl: './apartments-info.component.html',
  styleUrl: './apartments-info.component.scss'
})
export class ApartmentsInfoComponent implements AfterViewInit {

  slideIndex = 1;

  @ViewChildren('slide') slides!: QueryList<ElementRef>;
  @ViewChildren('thumb') thumbs!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    this.showSlide(this.slideIndex);
  }

  currentSlide(n: number): void {
    this.slideIndex = n;
    this.showSlide(n);
  }

  showSlide(n: number): void {
    const slidesArray = this.slides.toArray();
    const thumbsArray = this.thumbs.toArray();

    if (n > slidesArray.length) this.slideIndex = 1;
    if (n < 1) this.slideIndex = slidesArray.length;

    slidesArray.forEach(slide => {
      slide.nativeElement.style.display = 'none';
    });

    thumbsArray.forEach(thumb => {
      thumb.nativeElement.classList.remove('active-thumb');
      thumb.nativeElement.style.opacity = '0.6';
    });

    slidesArray[this.slideIndex - 1].nativeElement.style.display = 'block';
    thumbsArray[this.slideIndex - 1].nativeElement.classList.add('active-thumb');
    thumbsArray[this.slideIndex - 1].nativeElement.style.opacity = '1';
  }
}
