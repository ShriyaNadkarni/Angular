import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Course } from '../interface/course';
import { Reviews } from '../interface/reviews';

@Injectable({
  providedIn: 'root'
})
export class LserviceService {


  constructor(private http:HttpClient) { }

  get():Observable<Course[]>{
return this.http.get<Course[]>("http://localhost:4000/courses")
  }


  getReview():Observable<Reviews[]>{
    return this.http.get<Reviews[]>("http://localhost:4000/reviews")
  }

  add(payload:Course){
    return  this.http.post("http://localhost:4000/courses",payload);
    }
    
  addReview(payloadd:Reviews){
    return this.http.post("http://localhost:4000/reviews",payloadd);
  }
}
