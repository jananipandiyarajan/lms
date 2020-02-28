import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Observable } from 'rxjs';
import { Employee } from '../employee';

@Component({
  selector: 'app-manager-details',
  templateUrl: './manager-details.component.html',
  styleUrls: ['./manager-details.component.css']
})
export class ManagerDetailsComponent implements OnInit {

  
  mgrId : number;
  managerFound : Observable<Employee>;
  constructor(private _empService : EmployeeService) {
    this.mgrId = parseInt(localStorage.getItem("mgrId"));
    this.managerFound = this._empService.searchEmployee(this.mgrId);
   }
  ngOnInit(): void {
  }

}
