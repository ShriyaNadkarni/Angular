import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from '../app/users/list/list.component';
import { LoginComponent } from '../app/users/login/login.component';

const routes: Routes = [
  {path: 'list' ,component:ListComponent},
  {path: 'login' ,component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
