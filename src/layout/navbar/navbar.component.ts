import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationDialogComponent } from 'src/app/Teachers/confirmation-dialog/confirmation-dialog.component';
import { Employee } from 'src/interface/employee';
import { AuthenticationService } from 'src/service/authentication.service';
import { EmployeeService } from 'src/service/employee.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  islogged: boolean = false;
  userId: number = 1;
  employeeData: Employee | undefined;
  employeeImage: string | undefined;

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private employeeService: EmployeeService,
    private route: ActivatedRoute
  ) {}


  ngOnInit(): void {
   
    this.route.queryParams.subscribe(params => {
      this.userId = +params['id'];
      if (!isNaN(this.userId) && this.userId !== null && this.userId !== undefined) {
             this.employeeService.getEmployeeImageById(this.userId).subscribe(
               (image: string) => {
                 this.employeeImage = image;
                 console.log('Employee Image:', this.employeeImage);
               },
               (error) => {
                 console.error('Error fetching employee image:', error);
               }
             );
           } else {
             console.error('Invalid user ID:', params['id']);
           }
    });
  }
  
 
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

  isAdmin() {
    const user = this.authService.getUserDetails();
    return user ? user.isAdmin : false;
  }

}