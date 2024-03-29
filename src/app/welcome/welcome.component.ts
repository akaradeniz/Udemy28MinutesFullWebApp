import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
name:string='';
  //ActivatedRoute for implement parameter to path import from @angular/router
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.name=this.route.snapshot.params['name'];
  }

}
