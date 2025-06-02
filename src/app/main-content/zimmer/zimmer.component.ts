import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-zimmer',
  imports: [CommonModule, RouterLink],
  standalone: true,
  templateUrl: './zimmer.component.html',
  styleUrls: ['./zimmer.component.scss']
})
export class ZimmerComponent implements AfterViewInit {

  currentZimmerIndex = 0;
  zimmerImages!: NodeListOf<HTMLImageElement>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.zimmerImages = document.querySelectorAll('.zimmer_img img');
      console.log(this.zimmerImages);

      const totalZimmerImages = this.zimmerImages.length;

      const showZimmerImage = (index: number) => {
        this.zimmerImages.forEach((img, i) => {
          img.classList.remove('active');
          if (i === index) {
            img.classList.add('active');
          }
        });
      };

      const nextZimmerImage = () => {
        this.currentZimmerIndex = (this.currentZimmerIndex + 1) % totalZimmerImages;
        showZimmerImage(this.currentZimmerIndex);
      };

      showZimmerImage(this.currentZimmerIndex);
      setInterval(nextZimmerImage, 4000);
    }
  }
}
