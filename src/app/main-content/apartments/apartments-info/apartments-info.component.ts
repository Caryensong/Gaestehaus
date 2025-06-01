import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-apartments-info',
  imports: [CommonModule],
  standalone:true,
  templateUrl: './apartments-info.component.html',
  styleUrl: './apartments-info.component.scss'
})
export class ApartmentsInfoComponent {
 showOverlay = false;
  overlayImage = '';
  imageList = [1, 2, 3, 4, 5, 6, 7, 8];
  currentIndex = 0;

  openOverlay(index: number): void {
    this.currentIndex = index;
    this.updateOverlayImage();
    this.showOverlay = true;
  }

  closeOverlay(): void {
    this.showOverlay = false;
  }

  previousImage(): void {
    this.currentIndex = (this.currentIndex - 1 + this.imageList.length) % this.imageList.length;
    this.updateOverlayImage();
  }

  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.imageList.length;
    this.updateOverlayImage();
  }

  private updateOverlayImage(): void {
    const imageNumber = this.imageList[this.currentIndex];
    this.overlayImage = `./assets/appartments/${imageNumber}.JPG`;
  }
}