import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DepartmentComponent } from './department/department.component';
import { ITComponent } from './it/it.component';
import { ComputerComponent } from './computer/computer.component';
import { CourseComponent } from './course/course.component';
import { LanguagesComponent } from './lang/languages/languages.component';
import { AddLangComponent } from './lang/add-lang/add-lang.component';
import { EmployeeComponent } from './Teachers/employee/employee.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'department',
    component: DepartmentComponent,
    children: [
      { path: 'it', component: ITComponent },
      { path: 'computer', component: ComputerComponent },
      // { path: '', redirectTo: 'it', pathMatch: 'prefix' }
    ]
  },
  {path:'course' , component:CourseComponent},
  {path:'course/:id' , component:CourseComponent},
  {path:'lang' ,component:LanguagesComponent},
  {path:'add-lang',component:AddLangComponent},
  {path:'employees',component:EmployeeComponent},
  {path:'students',  loadChildren: () => import('./Student/student.module').then(mod => mod.StudentModule)},
  {path:'users' ,  loadChildren: () => import('./users/users.module').then(m => m.UsersModule)},
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(){
    console.log('app routing module loaded ..')
  }
}




//   {path: 'department/:id',
//    component: DepartmentComponent,
//    children:[
//     {path:'it',component:ITComponent},
//     {path:'computer' ,component:ComputerComponent}
//    ]

// }






//"serve-json": "ng json-server --watch dbb.json --port 4000 --routes routes.json"