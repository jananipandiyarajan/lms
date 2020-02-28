import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-show-all',
  templateUrl: './employee-show-all.component.html',
  styleUrls: ['./employee-show-all.component.css']
})
export class EmployeeShowAllComponent implements OnInit {

  emps : Observable<Employee[]>;
  constructor(private _employeeService : EmployeeService, private _router : Router) {
    this.emps = this._employeeService.showEmployee();
   }

   show(empId, mgrId) {
    localStorage.setItem("empId",empId);
    localStorage.setItem("mgrId",mgrId);
    this._router.navigate(['/Login'])
   }

  ngOnInit(): void {
  }

}
