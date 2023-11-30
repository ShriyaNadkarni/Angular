import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-form-event',
  templateUrl: './form-event.component.html',
  styleUrls: ['./form-event.component.css']
})
export class FormEventComponent implements OnInit ,AfterViewInit{
 constructor(){}

 @ViewChild('addBtn',{ static: true }) addBtn!:ElementRef;

  ngOnInit(): void {}
  
  ngAfterViewInit(): void {
    let count = 1;
    fromEvent(this.addBtn.nativeElement, 'click').subscribe(res =>{
      let countVal = 'Video' + count++
      this.print(countVal);
    })
  }

  print(val:any){
    let el = document.createElement('li');
    el.innerText = val;
    document.getElementById('elContainer')?.appendChild(el);
  }

}
