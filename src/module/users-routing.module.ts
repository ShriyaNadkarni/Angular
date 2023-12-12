import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from '../app/users/list/list.component';
import { LoginComponent } from '../app/users/login/login.component';
import { SignupComponent } from 'src/app/users/signup/signup.component';
import { EditProfileComponent } from 'src/app/users/edit-profile/edit-profile.component';

const routes: Routes = [
  {path: 'list' ,component:ListComponent},
  {path: 'login' ,component:LoginComponent},
  {path: 'signup' ,component:SignupComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
