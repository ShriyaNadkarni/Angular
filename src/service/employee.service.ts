import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../interface/employee';
import { Observable, map } from 'rxjs';
import { apiUrls } from 'apis/apis';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  addDetails:Employee[]=[];
  httpClient: any;
  employeeData:Employee[] | undefined;
 
  constructor(private http:HttpClient,private router:Router) { }
 
  baseUrl:any ="http://localhost:4000"
  apiUrls = "http://localhost:4000/employees"

  getDetails():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseUrl + apiUrls.employee.emp_list)
  } 

  getEmployeeById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl + apiUrls.employee.emp_list}/${id}`);
  }
 
  updateEmployee(employeeData:Employee){
    return this.http.put<Employee>(this.baseUrl+apiUrls.employee.emp_list +employeeData.id, employeeData);
  }

  postDetails(addDetails:Employee):Observable<Employee[]>{
   return this.http.post<Employee[]>(this.baseUrl+apiUrls.employee.emp_list ,addDetails)
  }

  deleteEmployee(employeeData:any) {
    return this.http.delete(this.baseUrl+ apiUrls.employee.emp_list+ employeeData)
  } 

  getEmployeesByGender(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUrl + apiUrls.employee.emp_list}`);
  }



getEmployeeStatusById(id: number): Observable<"Onboarding" | "Active" | "Leave of Absence" | "Resigned" | "Terminated"> {
  const url = `${this.baseUrl}${apiUrls.employee.emp_list}/${id}`;
  return this.http.get<Employee>(url)
    .pipe(
      map((employeeData: Employee) => employeeData.status as "Onboarding" | "Active" | "Leave of Absence" | "Resigned" | "Terminated")
    );
}

getEmployeeImageById(id: number): Observable<string> {
  const url = `${this.baseUrl}${apiUrls.employee.emp_list}/${id}`;
  return this.http.get<Employee>(url)
    .pipe(
      map((employeeData: Employee) => employeeData.Image )
    );
}



updateEmployeeStatus(employeeId: number, newStatus: string): Observable<any> {
  const url = `http://localhost:4000/employees/${employeeId}`;
  const data = { status: newStatus };
  return this.http.patch(url, data);
}





}
































  // postDetails():Observable<Employee[]>{
  //   let body ={
  //     "id": 7,
  //     "name": "Shriya Nadkarni",
  //     "gender": "Female",
  //     "employeeId": "EMP007",
  //     "jobTitle": "Software Engineer",
  //     "department": "Engineering"
  //   }
  //   return this.http.post<Employee[]>(this.baseUrl+apiUrls.employee.emp_list,body)
  //   console.log("post is working!!");
  // }