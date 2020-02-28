import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leave-application',
  templateUrl: './leave-application.component.html',
  styleUrls: ['./leave-application.component.css']
})
export class LeaveApplicationComponent implements OnInit {

  constructor(private _router : Router) { }
  leaveApplication() {

      this._router.navigate(['/ApplyLeave']);
  }

  ngOnInit(): void {
  }

}
