import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../../service/employee.service';
import { Employee } from '../../../interface/employee';
import { errors } from 'src/errors';
import { AuthenticationService } from 'src/service/authentication.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  Data: Employee | any;
  employeeId: number | any;
  EditForm: FormGroup | any;
  errors = errors;
  hide:boolean =true;


  constructor(private route: ActivatedRoute, private authService: AuthenticationService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params)
      this.employeeId = params['id'];
      this.authService.getEmployeeById(this.employeeId).subscribe(data => {
        this.Data = data;
        console.log("id : ",this.employeeId)
        console.log("this is",this.Data)
        this.EditForm = this.fb.group({
          id: [this.Data?.id],
          name: [this.Data?.name, [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z ]*$/)]],
          gender: [this.Data?.gender, Validators.required],
          email: [this.Data?.email, [Validators.required, Validators.email]],
          education: [this.Data?.education, Validators.required],
          phonenumber: [this.Data?.phonenumber, Validators.required],
          password: [this.Data?.password, [Validators.required,Validators.maxLength(10)]],
         
        });
     
      });
      
    });
  }

  updateUser() {
    this.authService.updateEmployee(this.EditForm.value).subscribe((data) => {
      this.Data = data;
      console.log(data);
      this.router.navigate(["employees"]);
    });
  }

  getControl(name: any) {
    return this.EditForm?.get(name);
  }
}

