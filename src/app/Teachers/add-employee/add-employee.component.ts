import { Component } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../../service/employee.service';
import { Router } from '@angular/router';
import { Employee } from '../../../interface/employee';
import { errors } from 'src/errors';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  EmployeeForm: FormGroup;
  id: number = 0;
  gender: string = "";
  name: string = "";
  jobTitle: string = "";
  department: string = "";
  employeeId: string = "";
  errors = errors;


  constructor(private frmBuilder: FormBuilder, private eservice:EmployeeService,  private router: Router) {
    this.EmployeeForm = frmBuilder.group({
      id: new FormControl(),
      name: new FormControl('', [Validators.required , Validators.minLength(3), Validators.pattern(/^[a-zA-Z ]*$/)]),
      gender: new FormControl('', [Validators.required]),
      jobTitle: new FormControl('', [Validators.required]),
      department: new FormControl('', [Validators.required]),
      employeeId: new FormControl('', [Validators.required,Validators.pattern(/^EMP\d{3}$/)])
    })
  }

  postData(EmployeeForm:FormGroup){
    console.log(EmployeeForm.value);
    this.eservice.postDetails((this.EmployeeForm.value as Employee)).subscribe(()=>{
    this.router.navigate(['employees']);
    })
  }


 getControl(name:any){
  return this.EmployeeForm.get(name)
 }

}
