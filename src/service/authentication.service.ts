import { Injectable } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Observable } from 'rxjs';
import { Employee } from 'src/interface/employee';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService extends EmployeeService {
  private employees: Employee[] = [];
  userId: number | null = null;
  private authenticatedUser: Employee | null = null;


  getId(id: number): Observable<any> {
    return super.getEmployeeById(id);
  }
  private isAdmin: boolean = false ;
  private islogged: boolean = false;

  getIsLogged(): boolean {
    return this.islogged;
  }

  setIsLogged(value: boolean): void {
    this.islogged = value;
    this.isAdmin = false ; 
  }

  getAllEmployees(): Observable<Employee[]> {
    return super.getDetails();
  }

  setEmployees(employees: Employee[]): void {
    this.employees = employees;
  }

  logout(): void {
    this.islogged = false;
    this.authenticatedUser = null; 
  }

  getUserDetails(): Employee | null {
    return this.authenticatedUser;
  }

  setUserDetails(user: Employee): void {
    this.authenticatedUser = user;
  }

  getUserByNameAndJobTitle(name: string, password: string): Employee | undefined {
    console.log('Entered getUserByNameAndJobTitle:', name, password);
    const user = this.employees.find((user) => {
      return user.name.trim() === name.trim() && user.password.trim() === password.trim();
    });

 
    if (user) {
      this.setUserDetails(user);
    }

    return user;
  }
  

  signUp(data: any): Observable<any> {
    return super.postDetails(data);
  }
}
