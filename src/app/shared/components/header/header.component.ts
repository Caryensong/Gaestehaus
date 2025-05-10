import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  standalone:true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @ViewChild('nav', { static: false }) navRef!: ElementRef;

  toggleMenu() {
    this.navRef.nativeElement.classList.toggle('active');
  }
}
