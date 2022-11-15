import { Component, OnInit } from '@angular/core';

export class Todo{
  constructor(
    public id:number,
    public description: string,
    public done: boolean,
    public tDate: Date
  ) {
  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos=[
    new Todo(1,"learn to write a code", true, new Date()),
    new Todo(2,"learn Angular",true, new Date()),
    new Todo(3,"learn Spring Bootstrap", true, new Date()),
    new Todo(4,"Become a developer",true, new Date())
  ]

  // todos=[
  //   {id:1, description:"learn to write a code"},
  //   {id:2, description:"learn Angular"},
  //   {id:3, description:"learn Spring Bootstrap"},
  //   {id:4, description:"Become a developer"}
  // ]

// todo = {
//   id: 1,
//   description: "learn to angular"
//}
  constructor() { }

  ngOnInit(): void {
  }

}
