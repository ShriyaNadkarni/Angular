import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit{
  constructor(
    private builder: FormBuilder,
    private toaster: ToastrService,
    private auth: AuthenticationService,
    private router: Router
  ) {}

  loginForm = this.builder.group({
    name: this.builder.control('', Validators.required),
    jobTitle: this.builder.control('', Validators.required),
  });

  ngOnInit() {
    this.auth.getAllEmployees().subscribe((employees) => {   
      console.log('Employees:', employees);
      this.auth.setEmployees(employees); 
    });
  }
  
  login() {
    if (this.loginForm.valid) {
      const name: string = this.loginForm.value.name as string;
      const jobTitle: string = this.loginForm.value.jobTitle as string;  
      const user = this.auth.getUserByNameAndJobTitle(name, jobTitle);  
      if (user) {       
        this.router.navigate(['home'], { queryParams: { name, jobTitle } });
      } else {
        this.toaster.error('Invalid credentials');
      }
    }
  }  

}