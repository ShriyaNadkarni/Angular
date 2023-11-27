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
    this.allEmployees=data;
  })
}

editEmployee(employeeId: number) {
  this.router.navigate(['/employees', employeeId, 'edit']);
}


deleteEmployee(employeeId: number): void {
  this.eservice.deleteEmployee(employeeId).subscribe(
    () => {
      console.log('Employee deleted successfully');
      this.getDetails(); 
    },
    (error) => {
      console.error('Error deleting employee:', error);
     
    }
  );
}


}
