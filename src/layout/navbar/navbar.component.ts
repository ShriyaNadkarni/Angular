import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/service/authentication.service';
//import { AuthenticationService } from 'src/service/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  islogged :boolean =false ; 
  userId: string|any =''; 

 constructor(private router : Router , private authService :AuthenticationService){}
 
 
  editProfile() {
    this.router.navigate(['/profile/', this.authService.userId]);
    console.log('Edit Profile clicked');
  }

  logout(): void {
    this.authService.logout(); 
    this.router.navigate(['/login'])   
  }

  isAuthenticated(): boolean {
    return this.authService.getIsLogged();
  }


}




