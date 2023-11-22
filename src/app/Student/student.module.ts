import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { StudentComponent } from './student/student.component';


@NgModule({
  declarations: [
  StudentdetailsComponent,
  StudentComponent],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { 
  constructor(){
    console.log('student module loaded..')
  }
}
