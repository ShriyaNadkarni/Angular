import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{
allEmployees:Employee[]=[];
 
// allEmployeesPost:Employee[]=[];

constructor(private eservice:EmployeeService ,private router:Router){}


ngOnInit(): void {
  this.getDetails();
 // this.postDetails();
}

getDetails(){
  this.eservice.getDetails().subscribe((data)=>{
    console.log(data);
    this.allEmployees=data;
  })
}

editEmployee(employeeId: number) {
  this.router.navigate(['/employees', employeeId, 'edit']);
}




// postDetails(){
//   this.eservice.postDetails().subscribe((result)=>{
//     console.log(result);
//   })
// }

}
