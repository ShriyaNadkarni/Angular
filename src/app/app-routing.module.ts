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
import { NgrxpracComponent } from './ngPrac/ngrxprac/ngrxprac.component';
import { TodoComponent } from './ngPrac/todo/todo.component';
import { ManagerComponent } from './manager/manager.component';
import { DateTimeComponent } from './date-time/date-time.component';
import { WeatherComponent } from './weather/weather.component';
import { PieComponent } from './charts/pie/pie.component';
import { EmployeeDetailsComponent } from './ngPrac/employee-details/employee-details.component';



const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthenticationGuard] },    
  {
    path: 'department',                                                         
    component: DepartmentComponent,
    children: [
      { path: 'it', component: ITComponent },
      { path: 'computer', component: ComputerComponent },
    ]
  },
  {
    path: 'observable',                                                        
    component: ObservablesComponent,
    children: [
      { path: 'list', component: AllComponent },
      { path: 'formevent', component: FormEventComponent },
    ]
    , canActivate: [AuthenticationGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: 'ngrx', component: NgrxpracComponent, canActivate: [AuthenticationGuard] },                                
  { path: 'signup', component: SignupComponent },                                  
  { path: 'profile/:id', component: EditProfileComponent },                         
  { path: 'course', component: CourseComponent, canActivate: [AuthenticationGuard] },                                       
  { path: 'course/:id', component: CourseComponent, canActivate: [AuthenticationGuard] },                                  
  { path: 'lang', component: LanguagesComponent },                                   
  { path: 'add-lang', component: AddLangComponent },                                  
  { path: 'employees', component: EmployeeComponent, canActivate: [AuthenticationGuard] }, 
  { path: 'add-emp', component: AddEmployeeComponent, canActivate: [AuthenticationGuard] }, 
  { path: 'manager', component: ManagerComponent, canActivate: [AuthenticationGuard] },
  { path: 'employees/:id/edit', component: EditEmployeeComponent, canActivate: [AuthenticationGuard], title: 'Employee Edit' },
  { path: 'students', loadChildren: () => import('../module/student.module').then(mod => mod.StudentModule) },
  { path: 'users', loadChildren: () => import('../module/users.module').then(m => m.UsersModule) },
  { path: 'education', component: PieComponent ,canActivate: [AuthenticationGuard]}, 
  { path: 'date', component: DateTimeComponent ,canActivate: [AuthenticationGuard]},
  { path: 'weather', component: WeatherComponent,canActivate: [AuthenticationGuard] }, 
  {path: 'state' , component:EmployeeDetailsComponent,canActivate: [AuthenticationGuard]},
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
//"json-server --watch src/json/employee.json --port 4000"

