import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../../service/employee.service';
import { Employee } from '../../../interface/employee';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  employeeData: Employee | any;
  employeeId: number |any;
  EmployeeForm: FormGroup | any;

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService, private fb: FormBuilder,private router:Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.employeeId = params['id'];
      this.employeeService.getEmployeeById(this.employeeId).subscribe(data => {
        this.employeeData = data;
        console.log(this.employeeData)
        this.EmployeeForm = this.fb.group({
          id: [this.employeeData.id],  
          name: [this.employeeData.name, Validators.required],
          gender: [this.employeeData.gender, Validators.required],
          employeeId: [this.employeeData.employeeId, Validators.required],
          jobTitle: [this.employeeData.jobTitle, Validators.required],
          department: [this.employeeData.department, Validators.required],
        });
    });
    });
  }

  updateEmployee() {
   
   this.employeeService.updateEmployee(this.EmployeeForm.value).subscribe((data)=>{
    this.employeeData = data;
    console.log(data);
    this.router.navigate(["employees"]);
   })
  }

 
 
}
