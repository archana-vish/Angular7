import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';


export class Todo {
  constructor(public id: number, public description:string, public done: boolean, public targetDate:Date) {
  
  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[];

  // todos = [
  //   new Todo(1, 'Learn Angular7', false, new Date()),
  //   new Todo(2, 'Learn Spring REST', false, new Date()),
  //   new Todo(3, 'Learn JMeter', false, new Date())
  // ]
  // todo = {
  //   id:1,
  //   description: 'Learn to Dance'
  // };

  constructor(private todoService: TodoDataService) { }

  ngOnInit() {
    this.todoService.retrieveAllTodos('in28minutes').subscribe(
      response => {
        console.log('todos response ' + response);
        this.todos = response;
      }
    );
  }

}
