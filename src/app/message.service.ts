import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() {  }
  getmessage(){
    return "Hello Shriya !!";
  }
}
