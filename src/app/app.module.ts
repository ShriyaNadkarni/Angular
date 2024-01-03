import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { GenderPipe } from './pipes/gender.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/material/material.module';
import { ToastrModule } from 'ngx-toastr';
import { UsersModule } from 'src/module/users.module';
import { EditProfileComponent } from './users/edit-profile/edit-profile.component';
import { environment } from 'src/environments/environment';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';
import { NgxCaptchaModule } from 'ngx-captcha';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { reducers } from '../model/state.model';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxSpinnerService } from 'ngx-spinner';




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
    GenderPipe,
    EditProfileComponent,
  
  ],
  imports: [
   
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    UsersModule,
    MaterialModule,
    RecaptchaV3Module,
    NgxCaptchaModule,
    InfiniteScrollModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
    StoreModule.forRoot(reducers),
  ],
  providers: [MessageService, NumlistService, LserviceService, EmployeeService ,{
    provide: RECAPTCHA_V3_SITE_KEY,
    useValue: environment.recaptchaSiteKey,
  },NgxSpinnerService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], 
})
export class AppModule { }







//6LfKGzUpAAAAAERbFV9jGZ2H_SGgVj0WxVrvjmTf     -sitekey
//6LfKGzUpAAAAADJGnbpO1HZAe_oeLPelcAW88F2R    -secretkey