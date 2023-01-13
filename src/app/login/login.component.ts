import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HardcodedAuthenticationService} from "../service/hardcoded-authentication.service";

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
// Angular get Router (dependancy injection)
  constructor(private router:Router,
              public hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit(): void {
  }

  login() {
   // if(this.username==="adile" && this.password==="123"){
    if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)){
      //redirect to Welcome page
this.router.navigate(['welcome',this.username]);
     // this.isLoggedIn=true;
    }
    this.isLoggedIn=true;

console.log("Logged in")
  }
}
