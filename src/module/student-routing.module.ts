import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentComponent } from 'src/app/Student/student/student.component';
import { StudentdetailsComponent } from 'src/app/Student/studentdetails/studentdetails.component';


const routes: Routes = [
  {path:'student',component:StudentComponent},
  {path:'studentdetails',component:StudentdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
