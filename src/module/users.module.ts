// users.module.ts

import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/material/material.module';
import { LoginComponent } from 'src/app/users/login/login.component';
import { SignupComponent } from 'src/app/users/signup/signup.component';
import { RecaptchaV3Module  } from 'ng-recaptcha';
import { NgxCaptchaModule } from 'ngx-captcha';


@NgModule({
  declarations: [SignupComponent,LoginComponent],

imports: [MaterialModule, FormsModule, ReactiveFormsModule ,CommonModule , RecaptchaV3Module ,NgxCaptchaModule],
schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UsersModule {}
