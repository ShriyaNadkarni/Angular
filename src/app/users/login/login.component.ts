import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { errors } from 'src/errors';
import { AuthenticationService } from 'src/service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private builder: FormBuilder,
    private toaster: ToastrService,
    private auth: AuthenticationService,
    private router: Router
  ) { }

  errors=errors;

  loginForm = this.builder.group({
    name: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required),
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
      const password: string = this.loginForm.value.password as string;
      const user = this.auth.getUserByNameAndJobTitle(name, password);
      if (user) {
        this.router.navigate(['home'], { queryParams: { name } });
      } else {
        this.toaster.error('Invalid credentials');
      }
      
    }
  }
  getControl(name: any) {
    return this.loginForm.get(name)
  }


}