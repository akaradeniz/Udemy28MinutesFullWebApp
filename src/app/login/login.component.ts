import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  username:string="";
  password: string="";
  errorMessage:string="Invalid Login"
  isLoggedIn: boolean=false
// Angular get Router (dipendancy injection)
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  login() {
    if(this.username==="adile" && this.password==="123"){
      //redirect to Welcome page
this.router.navigate(['welcome',this.username]);
     // this.isLoggedIn=true;
    }
    this.isLoggedIn=true;

console.log("Logged in")
  }
}
