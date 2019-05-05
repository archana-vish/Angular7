import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';


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
  message: string;

  // todos = [
  //   new Todo(1, 'Learn Angular7', false, new Date()),
  //   new Todo(2, 'Learn Spring REST', false, new Date()),
  //   new Todo(3, 'Learn JMeter', false, new Date())
  // ]
  // todo = {
  //   id:1,
  //   description: 'Learn to Dance'
  // };

  constructor(private todoService: TodoDataService,
    private router: Router) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retrieveAllTodos('in28minutes').subscribe(
      response => {
        console.log('todos response ' + response);
        this.todos = response;
      }
    );
  }

  deleteTodo(id) {
    console.log('Delete todo' + id);
    this.todoService.deleteTodoById('in28minutes', id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete id ${id}`;
        this.refreshTodos();
      }
    )
  }

  updateTodo(id) {
    console.log('Update todo' + id);
    this.message = `Update id ${id}`;
    this.router.navigate(['todos', id]);
  }

  addTodo() {
    this.router.navigate(['todos',-1]);
  }

}
