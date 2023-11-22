import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable } from 'rxjs';
import { apiUrls } from 'apis/apis';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }
 
baseUrl:any ="http://localhost:4000"

  getDetails():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseUrl + apiUrls.employee.emp_list)
      }
    
}
