import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Leave } from './leave';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  constructor(private _http : Http) { }

  showLeaveHistory(empId : number, startDate : string, endDate : string) : Observable<Leave[]> {
    return this._http.get("http://localhost:8080/SNAPSHOT/api/leaves/leaveHistory/"+empId + "/" +startDate + "/" + endDate).
    map((res : Response) => res.json()); 
  }

  applyLeave(empId : number, startDate : string, endDate : string, leaveType : string,
    leaveReason : string) : Observable<string> {
    return this._http.post("http://localhost:8080/SNAPSHOT/api/leaves/applyLeaveForEmployee/" + empId + "/"
     + startDate + "/" + endDate + "/" + leaveType + "/" + leaveReason + "/" + "abc"  ,null).
    map((res : Response) => res.text());
  }
}
