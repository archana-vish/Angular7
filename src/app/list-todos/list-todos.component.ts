import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    {id:1, description: 'Learn Angular7'},
    {id:2, description: 'Learn Spring REST'},
    {id:3, description: 'Learn JMeter'}
  ]
  todo = {
    id:1,
    description: 'Learn to Dance'
  };

  constructor() { }

  ngOnInit() {
  }

}
