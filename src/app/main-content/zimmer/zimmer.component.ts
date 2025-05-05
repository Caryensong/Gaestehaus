import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-zimmer',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './zimmer.component.html',
  styleUrls: ['./zimmer.component.scss'] // <- Wichtig: styleUrls (Plural)
})
export class ZimmerComponent implements AfterViewInit {

  currentZimmerIndex = 0;
  zimmerImages!: NodeListOf<HTMLImageElement>;

  ngAfterViewInit() {
    this.zimmerImages = document.querySelectorAll('.zimmer_img img');
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
