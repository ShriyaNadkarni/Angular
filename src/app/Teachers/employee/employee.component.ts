import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../../../service/employee.service';
import { Employee } from '../../../interface/employee';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/service/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  allEmployees: Employee[] = [];
  
  filterData: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource: any;

  constructor(
    private eservice: EmployeeService,
    private router: Router,
    private authService: AuthenticationService,
    private toaster: ToastrService,
  ) { }

  ngOnInit(): void {
    const isAuthenticated = this.authService.getIsAuthenticated();
    const isAdmin = this.authService.getIsAdmin();

    if (!isAuthenticated || !isAdmin) {
      this.toaster.error('User not authenticated!');
      this.router.navigate(['home']);
    }

    this.getDetails();
  }

  getDetails() {
    this.eservice.getDetails().subscribe((data) => {
      this.allEmployees = data;
      this.dataSource = new MatTableDataSource(this.allEmployees);
  
      // Initialize paginator after data is loaded
      this.dataSource.paginator = this.paginator;
      this.paginator.pageSizeOptions = [5, 10, 25, 100];
      this.paginator.pageSize = 5;
    });
  }
  

  filteredResult() {
    if (!this.filterData) {
      this.getDetails();
    } else {
      this.dataSource.filter = this.filterData.trim().toLowerCase();
    }
  }

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
