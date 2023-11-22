import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  msg:string ="";

  constructor(private messageservice: MessageService) {
 }

 ngOnInit(){
this.msg = this.messageservice.getmessage();
 }
}
