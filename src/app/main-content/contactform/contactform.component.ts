import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { SendDialogComponent } from '../send-dialog/send-dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';


@Component({
  selector: 'app-contactform',
  imports: [CommonModule, FormsModule, HttpClientModule],
  standalone: true,
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss',
})
export class ContactformComponent {
  isChecked = false;
  mailTest = false;
  http = inject(HttpClient);

  contactData = {
    name: '',
    phone: '',
    email: '',
    message: '',
  };

    constructor(public dialog: MatDialog) {
  }

  isFormValid(): boolean {
    return (
      (this.contactData.name.trim() !== '' || this.contactData.name === '') &&
      (this.contactData.phone.trim() !== '' || this.contactData.phone === '') &&
      (this.contactData.email.trim() !== '' || this.contactData.email === '') &&
      this.isChecked
    );
  }

    post = {
    endPoint: 'https://caryen-song.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    console.log(this.contactData);
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
            this.isChecked = false;
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => {this.sendDialog(); }
        });

    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
      this.isChecked = false;
    }
  }

  sendDialog(){
     this.dialog.open(SendDialogComponent),{
      width:'500px',

     }
  }
}
