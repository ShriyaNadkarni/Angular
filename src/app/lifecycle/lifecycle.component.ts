import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css'
})
export class LifecycleComponent implements  OnChanges {
  @Input() inputMessage: string = "Shriya";
  message: string | undefined;
  ngOnChanges(changes: SimpleChanges) {
   
    if (changes['inputMessage']) {
      this.message = 'New message: ' + changes['inputMessage'].currentValue;
    }
  }
}
