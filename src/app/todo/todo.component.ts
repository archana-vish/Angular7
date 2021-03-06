import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number;
  todo: Todo;

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, '', false, new Date()); // So that when the page loads Todo is not null
    
    if (this.id > 0) {
      this.todoService.retrieveTodoById('in28minutes', this.id).subscribe(
        response => {
          console.log(response);
          this.todo = response;
        }
      )
    }
  }

  saveTodo() {
    this.id = this.route.snapshot.params['id'];
    //this.todo = new Todo(1, '', false, new Date()); // So that when the page loads Todo is not null
    if (this.id > 0) {
      this.todoService.updateTodo('in28minutes', this.id, this.todo).subscribe(
        response => {
          console.log(response);
          this.router.navigate(['todos']);
        }
      )
    } else {
      // Create a todo
      this.todoService.createTodo('in28minutes',  this.todo).subscribe(
        response => {
          console.log(response);
          this.router.navigate(['todos']);
        }
      )
    }
  }


}
