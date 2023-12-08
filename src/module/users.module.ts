// users.module.ts

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { LoginComponent } from 'src/app/users/login/login.component';
import { SignupComponent } from 'src/app/users/signup/signup.component';

@NgModule({
  declarations: [SignupComponent,LoginComponent],
  imports: [MaterialModule, FormsModule, ReactiveFormsModule ,CommonModule],
})
export class UsersModule {}
