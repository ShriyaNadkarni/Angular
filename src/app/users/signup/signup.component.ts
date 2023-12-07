import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/service/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private bulider: FormBuilder, private toaster: ToastrService,private auth: AuthenticationService ,private router:Router) { }

  signupForm = this.bulider.group({
    name: this.bulider.control('', Validators.required),
    jobTitle: this.bulider.control('', Validators.required),
    department: this.bulider.control('', Validators.required),
    gender: this.bulider.control('', Validators.required)

  });

  signup() {
    if (this.signupForm.valid) {
      this.auth.signUp(this.signupForm.value).subscribe(res => {
       this.toaster.success('Signed in successfully') ;
       this.router.navigate(['login']);
      } )
    }
    else {
      this.toaster.warning('Please enter valid data ');
    }
  }


}
