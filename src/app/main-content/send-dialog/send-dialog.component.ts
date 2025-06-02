import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-send-dialog',
  standalone:true,
   imports: [CommonModule],
  templateUrl: './send-dialog.component.html',
  styleUrl: './send-dialog.component.scss'
})
export class SendDialogComponent {
   constructor(public dialogRef: MatDialogRef<SendDialogComponent>) {}
  
    closeDialog(): void {
      this.dialogRef.close();
    }

}
