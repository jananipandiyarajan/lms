import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName : string;
  passCode : string;
  constructor(private _router : Router) { 
    this.userName=localStorage.getItem("empId");
  }

  validateMe() {
    if (this.passCode == "123") {
      this._router.navigate(['/Dashboard']);
    } else {
      alert("Invalid Credentials...");
    }
  }
  ngOnInit(): void {
  }

}
