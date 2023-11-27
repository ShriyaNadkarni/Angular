import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable } from 'rxjs';
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

  getDetails():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseUrl + apiUrls.employee.emp_list)
      } 


      getEmployeeById(id: number): Observable<any> {
        return this.http.get<any>(`${this.baseUrl + apiUrls.employee.emp_list}/${id}`);
      }
 
  updateEmployee(employeeData:Employee){
    return this.http.put<Employee>("http://localhost:4000/employees/"+employeeData.id, employeeData);
  }

  postDetails(addDetails:Employee):Observable<Employee[]>{
    
   return this.http.post<Employee[]>(this.baseUrl+apiUrls.employee.emp_list ,addDetails)
  }


  deleteEmployee(employeeId: number): Observable<Employee[]> {
    const url = `${this.baseUrl}/employees/${employeeId}`;
    console.log(employeeId)
  console.log(url)
    return this.http.delete<Employee[]>(url);
    
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