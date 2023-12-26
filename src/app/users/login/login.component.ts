import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { errors } from 'src/errors';
import { AuthenticationService } from 'src/service/authentication.service';
import { RecaptchaComponent } from 'ng-recaptcha';
import { Employee } from 'src/interface/employee';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  siteKey = '6LdLOzcpAAAAAHd1VvHiPGdGoijHXT2Q5WqKmOBo';
  @ViewChild('captchaElem') captchaElem: RecaptchaComponent | undefined;
  public captchaIsLoaded = false;
  public captchaSuccess = false;
  public captchaIsExpired = false;
  public captchaResponse?: string;

  constructor(
    private builder: FormBuilder,
    private toaster: ToastrService,
    private auth: AuthenticationService,
    private router: Router
  ) {}

  errors = errors;
  hide = true;

  loginForm = this.builder.group({
    name: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required),
    recaptcha: this.builder.control('', Validators.required),
  });

  ngOnInit() {
    this.auth.getAllEmployees().subscribe((employees) => {
      this.auth.setEmployees(employees);
    });
  }

  login() {
    if (this.loginForm.valid) {
      const name: string = this.loginForm.value.name as string;
      const password: string = this.loginForm.value.password as string;
      const user: Employee | any = this.auth.getUserByNameAndJobTitle(name, password);

      if (user) {
        console.log('isAdmin:', user.isAdmin);
        this.toaster.success('Welcome Admin!');
        console.log('message inside login page ');
      }

      this.router.navigate(['home'], { queryParams: { name, id: user.id } });
      this.auth.setIsLogged(true);
    } else {
      this.toaster.error('Please fill in all required fields to log in!');
    }
  }

  getControl(name: any) {
    return this.loginForm.get(name);
  }

  handleSuccess(data: any) {
    console.log(data);
  }
}













// login() {
//   if (this.loginForm.valid) {
//     const name: string = this.loginForm.value.name as string;
//     const password: string = this.loginForm.value.password as string;
//     const user = this.auth.getUserByNameAndJobTitle(name, password);
//     if (user) {
//       console.log('isAdmin:', user.isAdmin);
//       localStorage.setItem('isLoggedIn', 'true');
//       localStorage.setItem('userData', JSON.stringify(user));
//       console.log("inside login function");
//       if (user.isAdmin) {
//         console.log('isAdmin:', user.isAdmin);
//         this.toaster.success('Welcome Admin!');
//         console.log("message inside login page ");
//         // this.router.navigate(['employees']);
//       }    
//       this.router.navigate(['home'], { queryParams: { name, id: user.id } });
//       this.auth.setIsLogged(true);
//     } else {
//       this.toaster.error('Invalid username or password');
//     }
//   }
//   else{
//     this.toaster.error(' Please fill in all required fields to log in!');
//   }
// }


  // handleSuccess(data: any){
  //   console.log(data);
  // }