import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-apartments',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.scss'] // <- style**Urls**, nicht "styleUrl"
})
export class ApartmentsComponent implements AfterViewInit {

  currentAppIndex = 0;
  appImages!: NodeListOf<HTMLImageElement>;

  ngAfterViewInit() {
    this.appImages = document.querySelectorAll('.appartments_img img');
    const totalAppImages = this.appImages.length;

    const showAppImage = (index: number) => {
      this.appImages.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
          img.classList.add('active');
        }
      });
    };

    const nextAppImage = () => {
      this.currentAppIndex = (this.currentAppIndex + 1) % totalAppImages;
      showAppImage(this.currentAppIndex);
    };

    showAppImage(this.currentAppIndex);
    setInterval(nextAppImage, 4000);
  }
}
