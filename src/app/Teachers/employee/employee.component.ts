import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../service/employee.service';
import { Employee } from '../../../interface/employee';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
// import { apiUrls } from 'apis/apis';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{
allEmployees:Employee[]=[];
url = "http://localhost:4000"
 
// allEmployeesPost:Employee[]=[];

constructor(private eservice:EmployeeService ,private router:Router,private http: HttpClient){}


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

deleteEmployee(data: any) {
  const confirmation = window.confirm(`Are you sure you want to delete ${data.name}?`);

  if (confirmation) {
    this.eservice.deleteEmployee(data).subscribe(() => {
      this.getDetails();
    });
  }
}
}
}





































// const url = this.url +"/employees/" +id;
  // this.http.delete(url).subscribe();
  // console.log("hello")
  // console.log(url)
  // this.getDetails();








 // this.eservice.deleteEmployee(employeeId).subscribe(
  //   () => {
    
  //     this.getDetails(); 
  //   }
  // );