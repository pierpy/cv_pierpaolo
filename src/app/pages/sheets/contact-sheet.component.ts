import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatIconModule } from '@angular/material/icon';

@Component({
  standalone: true,
  selector: 'app-contact-sheet',
  templateUrl: './contact-sheet.component.html',
  imports: [MatIconModule]
})
export class ContactSheetComponent {
  isOpen = false;
  open()  { this.isOpen = true; }
  close() { this.isOpen = false; }
}
