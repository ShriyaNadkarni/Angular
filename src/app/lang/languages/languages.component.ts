import { Component, OnInit } from '@angular/core';
import { LserviceService } from '../../../service/lservice.service';
import { Course } from '../../../interface/course';
import { Reviews } from '../../../interface/reviews';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {
allCourse:Course[]=[];
allReviews:Reviews[]=[];


constructor(private lservice:LserviceService){}

ngOnInit(): void{
  this.get();
  this.getReview();
}


get(){
this.lservice.get().subscribe((data) => {
  this.allCourse = data;
})
}

getReview(){
  this.lservice.getReview().subscribe((review) => {
    console.log(review);
    this.allReviews = review;
  })
}

}
