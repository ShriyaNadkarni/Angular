import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable } from 'rxjs';
import { apiUrls } from 'apis/apis';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  addDetails:Employee[]=[];

  constructor(private http:HttpClient) { }
 
baseUrl:any ="http://localhost:4000"

  getDetails():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseUrl + apiUrls.employee.emp_list)
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

  postDetails(addDetails:Employee):Observable<Employee[]>{
    
   return this.http.post<Employee[]>(this.baseUrl+apiUrls.employee.emp_list ,addDetails)
  }


  
 // onEditClicked(id:number){
    //get the product based on the id
   // let currentEmployee = this.allEmployees.find((p)=>{return p.id === id})
   // console.log(currentEmployee);
    
    //populate the form with the product details
   // this.
    //change the button value to update product 
    //}

    
}
