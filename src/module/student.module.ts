import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from 'src/app/Student/student/student.component';
import { StudentdetailsComponent } from 'src/app/Student/studentdetails/studentdetails.component';

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
