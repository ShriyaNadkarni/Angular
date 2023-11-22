import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DepartmentComponent } from './department/department.component';
import { ITComponent } from './it/it.component';
import { ComputerComponent } from './computer/computer.component';
import { CourseComponent } from './course/course.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { MessageService } from './message.service';
import { NumlistService } from './numlist.service';
import { LanguagesComponent } from './lang/languages/languages.component';
import { LserviceService } from './lang/lservice.service';
import { HttpClientModule } from '@angular/common/http';
import { AddLangComponent } from './lang/add-lang/add-lang.component';
import { ReactiveFormsModule } from '@angular/forms';

import { EmployeeService } from './Teachers/employee.service';
import { EmployeeComponent } from './Teachers/employee/employee.component';


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
EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [MessageService,NumlistService,LserviceService,EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
