import { Component, inject } from '@angular/core';
import { MatBottomSheet }    from '@angular/material/bottom-sheet';
import { ContactSheetComponent } from '../sheets/contact-sheet.component';

@Component({
  standalone: true,
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  imports: [ContactSheetComponent]
})
export class ContactComponent {
  isOpen = false;
  open() { this.isOpen = true; }
  close() { this.isOpen = false; }
}