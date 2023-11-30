import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../service/employee.service';
import { Employee } from '../../../interface/employee';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  allEmployees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  filterData: string = '';
 
  

  constructor(private eservice: EmployeeService, private router: Router, private http: HttpClient) {}


  ngOnInit(): void {
    this.getDetails();
      // this.filteredResult();
  }

  getDetails() {
    this.eservice.getDetails().subscribe((data) => {
      this.allEmployees = data;
    });
  }


  filteredResult(){
    if(this.filterData === "")
    {
      this.getDetails();
    }
    else
    {
    this.eservice.getDetails()  
    .pipe(
      map(employees => employees
        .filter(emp => 
          emp.name == this.filterData || emp.gender == this.filterData || emp.jobTitle === this.filterData || emp.department === this.filterData)),
        )
      .subscribe((res) => {
        console.log(res);
        this.allEmployees = res;
      })
  }


  }





  



  // filterEmployees() {

  //   this.filteredEmployees = this.allEmployees.filter(emp =>
  //     emp.name.toLowerCase().includes(this.filterKeyword.toLowerCase())
  //   );
  //   console.log("its clicked")
  // }

//idk
  // filterEmployees() {
  //   this.eservice.getDetails()
  //     .pipe(
  //       map(employee => employee.filter(emp =>
  //             emp.name.toLowerCase().includes(this.filterKeyword.toLowerCase())
  //          )
  //       ));
  // }


  // filterEmployees() {
  //   this.filteredEmployees = this.allEmployees.filter(emp =>
  //     emp.name.toLowerCase().includes(this.filterKeyword.toLowerCase())
  //   );
  // }
  

  // matchesFilterCriteria(employee: Employee): boolean {
  //   const keywordLower = this.filterKeyword.toLowerCase();
  //   return employee.name.toLowerCase().includes(keywordLower);
  // }

  editEmployee(employeeId: number) {
    this.router.navigate(['/employees', employeeId, 'edit']);
  }

  deleteEmployee(data: any) {
    const confirmation = window.confirm(`Are you sure you want to delete?`);

    if (confirmation) {
      this.eservice.deleteEmployee(data).subscribe(() => {
        this.getDetails();
      });
    }
  }
}

