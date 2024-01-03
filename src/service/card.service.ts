import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Manager } from 'src/interface/manager';

@Injectable({
  providedIn: 'root'
})
export class CardService { 
  constructor(private http:HttpClient, private router:Router) { }
 
  baseUrl:string ="http://localhost:4000/Manager"
  
  getDetails():Observable<Manager[]>{
    const data = this.http.get<Manager[]>(this.baseUrl);
    return data; 
  } 

  
}
