import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Employee } from 'src/model/employee.model';
import { AppState } from 'src/model/state.model';
import { Store } from '@ngrx/store';
import { loadEmployees, updateEmployeeStatus } from 'src/app/store/Actions/employee.actions';
import { selectAllEmployees, selectEmployeeById } from 'src/app/store/employee.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employees$: Observable<Employee[]>;
  displayedColumns: string[] = ['name', 'email', 'education', 'isAdmin', 'actions'];
  dataSource: MatTableDataSource<Employee> = new MatTableDataSource();

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private store: Store<AppState>) {
    this.employees$ = this.store.select(selectAllEmployees);
  }

  ngOnInit(): void {
    this.store.dispatch(loadEmployees());

    this.employees$.subscribe(employees => {
      this.dataSource = new MatTableDataSource(employees);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  updateStatus(event: any, employeeId: number) {
    const newStatus = event?.target?.value;
    if (newStatus) {
      this.store.dispatch(
        updateEmployeeStatus({ id: employeeId, status: newStatus as "Onboarding" | "Active" | "Leave of Absence" | "Resigned" | "Terminated" })
      );
    }
  }
}
