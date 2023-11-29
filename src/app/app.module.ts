import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from '../layout/navbar/navbar.component';
import { HomeComponent } from '../layout/home/home.component';
import { NotfoundComponent } from '../layout/notfound/notfound.component';
import { DepartmentComponent } from './department/department.component';
import { ITComponent } from './it/it.component';
import { ComputerComponent } from './computer/computer.component';
import { CourseComponent } from './course/course.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { MessageService } from '../service/message.service';
import { NumlistService } from '../service/numlist.service';
import { LanguagesComponent } from './lang/languages/languages.component';
import { LserviceService } from '../service/lservice.service';
import { HttpClientModule } from '@angular/common/http';
import { AddLangComponent } from './lang/add-lang/add-lang.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EmployeeService } from '../service/employee.service';
import { EmployeeComponent } from './Teachers/employee/employee.component';
import { AddEmployeeComponent } from './Teachers/add-employee/add-employee.component';
import { EditEmployeeComponent } from './Teachers/edit-employee/edit-employee.component';
import { PromiseComponent } from './promise/promise.component';
import { ObservablesComponent } from './observables/observables.component';
import { AllComponent } from './observables/all/all.component';
import { FormEventComponent } from './observables/form-event/form-event.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NotfoundComponent,
    DepartmentComponent,
    ITComponent,
    ComputerComponent,
    CourseComponent,
    Comp1Component,
    Comp2Component,
    LanguagesComponent,
    AddLangComponent,
EmployeeComponent,
AddEmployeeComponent,
EditEmployeeComponent,
PromiseComponent,
ObservablesComponent,
AllComponent,
FormEventComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [MessageService,NumlistService,LserviceService,EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
