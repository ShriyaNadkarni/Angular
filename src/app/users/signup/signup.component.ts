import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { errors } from 'src/errors';
import { AuthenticationService } from 'src/service/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private bulider: FormBuilder, private toaster: ToastrService, private auth: AuthenticationService, private router: Router) { }

  errors =errors ;
  
  signupForm = this.bulider.group({
    name: this.bulider.control('', Validators.required),
    education: this.bulider.control('', Validators.required),
    phonenumber: this.bulider.control('', [Validators.required,Validators.pattern(/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/)]),
    gender: this.bulider.control('male', Validators.required),
    email: this.bulider.control('', [Validators.required, Validators.email]),
    password: this.bulider.control('', Validators.required)
  });

  signup() {
    if (this.signupForm.valid) {
      this.auth.signUp(this.signupForm.value).subscribe(res => {
        this.toaster.success('Signed in successfully');
        this.router.navigate(['login']);
        console.log(this.signupForm.value)
      })
    }
    else {
      this.toaster.warning('Please enter valid data ');
    }
  }

  getControl(name: any) {
    return this.signupForm.get(name)
  }



}
