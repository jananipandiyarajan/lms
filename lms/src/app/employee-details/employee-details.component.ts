import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Observable } from 'rxjs';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employeeFound : Observable<Employee>;
  empId : number;
  constructor(private _empService : EmployeeService) {
    this.empId = parseInt(localStorage.getItem("empId"));
    this.employeeFound = this._empService.searchEmployee(this.empId);
   }

  ngOnInit(): void {
  }

}
