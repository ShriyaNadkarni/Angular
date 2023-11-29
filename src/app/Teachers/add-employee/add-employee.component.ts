import { Component } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from '../../../service/employee.service';
import { Router } from '@angular/router';
import { Employee } from '../../../interface/employee';



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


  constructor(private frmBuilder: FormBuilder, private eservice:EmployeeService,  private router: Router) {
    this.EmployeeForm = frmBuilder.group({
      id: new FormControl(),
      name: new FormControl(),
      gender: new FormControl(),
      jobTitle: new FormControl(),
      department: new FormControl(),
      employeeId: new FormControl()
    })
  }

  postData(EmployeeForm:FormGroup){
    console.log(EmployeeForm.value);
    this.eservice.postDetails((this.EmployeeForm.value as Employee)).subscribe(()=>{
    this.router.navigate(['employees']);
    })
  }

}
