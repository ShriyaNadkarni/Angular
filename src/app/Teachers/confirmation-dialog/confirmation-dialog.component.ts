import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent {
  @Input() message: string = 'Are you sure?';
  @Output() confirmed: EventEmitter<boolean> = new EventEmitter<boolean>();

  isOpen: boolean = false; // Add this property

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }

  confirm() {
    this.confirmed.emit(true);
    this.close();
  }

  cancel() {
    this.confirmed.emit(false);
    this.close();
  }
}
