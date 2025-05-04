import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'] // <- styleUrls (nicht "styleUrl")
})
export class IndexComponent implements AfterViewInit {
  currentHomeIndex = 0;
  homeImages!: NodeListOf<HTMLImageElement>;


  ngAfterViewInit() {
    this.homeImages = document.querySelectorAll('.home_img img');
    const totalHomeImages = this.homeImages.length;

    const showHomeImage = (index: number) => {
      this.homeImages.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
          img.classList.add('active');
        }
      });
    };

    const nextHomeImage = () => {
      this.currentHomeIndex = (this.currentHomeIndex + 1) % totalHomeImages;
      showHomeImage(this.currentHomeIndex);
    };

    showHomeImage(this.currentHomeIndex);
    setInterval(nextHomeImage, 4000);
  }
}
