import { Component, OnInit } from '@angular/core';
import { Leave } from '../leave';
import { Observable } from 'rxjs';
import { LeaveService } from '../leave.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leave-history',
  templateUrl: './leave-history.component.html',
  styleUrls: ['./leave-history.component.css']
})

export class LeaveHistoryComponent implements OnInit {
  empId : number;
  sDate : string;
  eDate : string;
  leaveHistory : Observable<Leave[]>;
  constructor(private _leaveService : LeaveService, private _router : Router) {
    this.empId = parseInt(localStorage.getItem("empId"));
    this.sDate = "2010-01-01";
    this.eDate = "2025-01-01";
    this.leaveHistory = this._leaveService.showLeaveHistory(this.empId, this.sDate, this.eDate);
  }
  ngOnInit(): void {
  }

}
