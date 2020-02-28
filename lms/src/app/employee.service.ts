import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http : Http) {

   }
   showEmployee() : Observable<Employee[]> {
     return this._http.get("http://localhost:8080/SNAPSHOT/api/employees/").
     map((res : Response) => res.json()); 
   }
   searchEmployee(empId : number) : Observable<Employee> {
    return this._http.get("http://localhost:8080/SNAPSHOT/api/employees/" +empId).
    map((res : Response) => res.json()); 
  }
} 
