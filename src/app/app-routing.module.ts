import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../layout/home/home.component';
import { NotfoundComponent } from '../layout/notfound/notfound.component';
import { DepartmentComponent } from './department/department.component';
import { ITComponent } from './it/it.component';
import { ComputerComponent } from './computer/computer.component';
import { CourseComponent } from './course/course.component';
import { LanguagesComponent } from './lang/languages/languages.component';
import { AddLangComponent } from './lang/add-lang/add-lang.component';
import { EmployeeComponent } from './Teachers/employee/employee.component';
import { AddEmployeeComponent } from './Teachers/add-employee/add-employee.component';
import { EditEmployeeComponent } from './Teachers/edit-employee/edit-employee.component';
import { ObservablesComponent } from './observables/observables.component';
import { AllComponent } from './observables/all/all.component';
import { FormEventComponent } from './observables/form-event/form-event.component';
import { LoginComponent } from './users/login/login.component';
//import { AuthenticationGuard } from '../Guards/authentication.guard';
import { SignupComponent } from './users/signup/signup.component';
import { AuthenticationGuard } from 'src/Guards/authentication.guard';



const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent ,canActivate:[AuthenticationGuard]},
  {
    path: 'department',
    component: DepartmentComponent,
    children: [
      { path: 'it', component: ITComponent },
      { path: 'computer', component: ComputerComponent },
      // { path: '', redirectTo: 'it', pathMatch: 'prefix' }
    ]
  },
  {
    path: 'observable',
    component: ObservablesComponent,
    children: [
      { path: 'list', component: AllComponent },
      { path: 'formevent', component: FormEventComponent },
    ]
  },
  
  {path: 'login' , component:LoginComponent },
  {path: 'signup' ,component:SignupComponent},
  { path: 'course', component: CourseComponent },
  { path: 'course/:id', component: CourseComponent },
  { path: 'lang', component: LanguagesComponent },
  { path: 'add-lang', component: AddLangComponent },
  { path: 'employees', component: EmployeeComponent },
  { path: 'add-emp', component: AddEmployeeComponent },
  { path: 'employees/:id/edit', component: EditEmployeeComponent, title: 'Employee Edit' },
  { path: 'students', loadChildren: () => import('../module/student.module').then(mod => mod.StudentModule) },
  { path: 'users', loadChildren: () => import('../module/users.module').then(m => m.UsersModule) },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() {
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