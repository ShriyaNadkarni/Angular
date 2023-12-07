import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { EmployeeService } from './employee.service';

interface EmployeeResponse {
  Employees: Employee[];
}

interface Employee {
  id: number;
  name: string;
  gender: string;
  employeeId: string;
  jobTitle: string;
  department: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private employees: Employee[] = [];
  url = "http://localhost:4000/employees";

  constructor(private http: HttpClient, private eservice: EmployeeService) {}

  getAllEmployees(): Observable<Employee[]> {
    console.log('in getall function');
    return this.http.get<Employee[]>(this.url).pipe(
      map((data) => {
        this.employees = data; 
        console.log('All Employees:', this.employees);
        return data;
      }),
      catchError((error) => {
        console.error('Error fetching employees:', error);
        return throwError(error);
      })
    );
  }

  setEmployees(employees: Employee[]): void {
    this.employees = employees;
  }

  getUserByNameAndJobTitle(name: string, jobTitle: string): EmployeeResponse | any {
    console.log('Entered getUserByNameAndJobTitle:', name, jobTitle);
    console.log('All Employees:', this.employees);
    const user = this.employees.find((user) => {
      console.log('Checking user:', user);
      return user.name.trim() === name.trim() && user.jobTitle.trim() === jobTitle.trim();
    });
    console.log('Found user:', user);
    return user;
  }

  signUp(data: any): Observable<any> {
    return this.http.post('http://localhost:4000/employees', data);
  }
}


