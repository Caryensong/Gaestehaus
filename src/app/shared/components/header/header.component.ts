import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink],
  standalone:true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @ViewChild('nav', { static: false }) navRef!: ElementRef;
  @ViewChild('burger', { static: false }) burgerRef!: ElementRef;

  toggleMenu() {
    this.navRef.nativeElement.classList.toggle('active');
  }

  @HostListener('document:click', ['$event'])
  onClickOutSide(event: Event) {
    const nav = this.navRef.nativeElement;
    const burger = this.burgerRef.nativeElement;

    if( nav?.classList.contains('active') && 
        !nav.contains(event.target) && 
        !burger.contains(event.target) ) {
          nav.classList.remove('active');
    }

}
}
