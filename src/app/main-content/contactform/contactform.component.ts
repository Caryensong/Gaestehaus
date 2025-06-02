import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import e from 'express';

@Component({
  selector: 'app-contactform',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss',
})
export class ContactformComponent {
  isChecked = false;

  contactData = {
    name: '',
    phone: '',
    email: '',
    message: '',
  };

  isFormValid(): boolean {
    return (
      (this.contactData.name.trim() !== '' || this.contactData.name === '') &&
      (this.contactData.phone.trim() !== '' || this.contactData.phone === '') &&
      (this.contactData.email.trim() !== '' || this.contactData.email === '') &&
      this.isChecked
    );
  }

}
