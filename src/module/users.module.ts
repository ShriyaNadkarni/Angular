// users.module.ts

import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';
import { LoginComponent } from 'src/app/users/login/login.component';
import { SignupComponent } from 'src/app/users/signup/signup.component';

@NgModule({
  declarations: [SignupComponent,LoginComponent],
  imports: [MaterialModule],
})
export class UsersModule {}
