import { Component } from '@angular/core';
import { NumlistService } from '../../service/numlist.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css'],
 // providers:[NumlistService]
})
export class Comp2Component {
  list2: number[] = [];

  constructor(private numlistService: NumlistService) { }

  ngOnInit() {
    this.list2 = this.numlistService.getnumber();
  }

  addnumber1(val: any) {
    this.numlistService.addnumber(val);
  }
}
