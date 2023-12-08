import { Injectable } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Observable } from 'rxjs';
import { Employee } from 'src/interface/employee';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService extends EmployeeService {
  private employees: Employee[] = [];
  private authenticatedUser: Employee | null = null;

  
  getAllEmployees(): Observable<Employee[]> {
    console.log('in getall function (AuthenticationService)');
    return super.getDetails(); 
  }

  setEmployees(employees: Employee[]): void {
    this.employees = employees;
  }

  getUserByNameAndJobTitle(name: string, password: string): Employee | undefined {
    console.log('Entered getUserByNameAndJobTitle:', name, password);
    console.log('All Employees:', this.employees);
    return this.employees.find((user) => {
      console.log('Checking user:', user);
      return user.name.trim() === name.trim() && user.password.trim() === password.trim();
    });
  }

  signUp(data: any): Observable<any> {
    return super.postDetails(data);  
  }
}





















// isAuthenticated(): boolean {
//   return this.authenticatedUser !== null;
// }

// authenticateUser(user: Employee): void {
//   this.authenticatedUser = user;
//   console.log('User authenticated:', user);
// }

// logout(): void {
//   this.authenticatedUser = null;
// }
