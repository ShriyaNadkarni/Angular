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
import { AuthenticationGuard } from 'src/Guards/authentication.guard';
import { EditProfileComponent } from './users/edit-profile/edit-profile.component';
import { SignupComponent } from './users/signup/signup.component';



const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent ,canActivate:[AuthenticationGuard]},     //both admin + user
  {
    path: 'department',                                                           //both admin + user
    component: DepartmentComponent,                                         
    children: [
      { path: 'it', component: ITComponent },
      { path: 'computer', component: ComputerComponent },
    ]
  },
  { path: 'observable',                                                         //both admin + user
    component: ObservablesComponent,
    children: [
      { path: 'list', component: AllComponent },
      { path: 'formevent', component: FormEventComponent },
    ]
  }, 
  {path: 'login' , component:LoginComponent },                                  //both admin + user
  {path: 'signup' , component:SignupComponent },                                   //both admin + user
  { path: 'profile/:id', component: EditProfileComponent },                         //both admin + user
  { path: 'course', component: CourseComponent , canActivate:[AuthenticationGuard] },  //only admin
  { path: 'course/:id', component: CourseComponent },                                   //only admin
  { path: 'lang', component: LanguagesComponent },                                   //only admin
  { path: 'add-lang', component: AddLangComponent},                                   //only admin
  { path: 'employees', component: EmployeeComponent },                                 //only admin        
  { path: 'add-emp', component: AddEmployeeComponent },                                  //only admin
  { path: 'employees/:id/edit', component: EditEmployeeComponent, title: 'Employee Edit' }, //only admin
  { path: 'students', loadChildren: () => import('../module/student.module').then(mod => mod.StudentModule) },  
  { path: 'users', loadChildren: () => import('../module/users.module').then(m => m.UsersModule)},  
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














//"serve-json": "ng json-server --watch dbb.json --port 4000 --routes routes.json"