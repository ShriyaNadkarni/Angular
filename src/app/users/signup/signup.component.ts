import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { errors } from 'src/errors';
import { AuthenticationService } from 'src/service/authentication.service';

interface SignupForm {
  name: string;
  education: string;
  phonenumber: string;
  gender: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(
    private builder: FormBuilder,
    private toaster: ToastrService,
    private auth: AuthenticationService,
    private router: Router
  ) {}

  errors = errors;
  hide = true;

  signupForm: FormGroup = this.builder.group({
    name: this.builder.control('', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z ]*$/)]),
    education: this.builder.control('', Validators.required),
    phonenumber: this.builder.control('', Validators.required),
    gender: this.builder.control('male', Validators.required),
    email: this.builder.control('', [Validators.required, Validators.email]),
    password: this.builder.control('', [Validators.required, Validators.maxLength(10)])
  });

  signup() {
    if (this.signupForm.valid) {
      const formData: SignupForm = this.signupForm.value as SignupForm; 
      this.auth.signUp(formData).subscribe(
        (res) => {
          this.toaster.success('Signed in successfully');
          this.router.navigate(['login']);
        },
        (error) => {
          console.error(error);
          this.toaster.error('Error signing up');
        }
      );
    } else {
      this.toaster.warning('Please enter valid data ');
    }
  }

  getControl(name: string) {
    return this.signupForm.get(name);
  }

  reset() {
    this.signupForm.reset();
  }
}
