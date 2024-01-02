import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as TodoActions from 'src/app/store/Actions/todo.actions';


@Component({
  selector: 'app-todo',
  standalone: true,
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})


export class TodoComponent {
  
    constructor(private store: Store) {}  
    newTask: string = ''; 


    addTodo(task: string) {
      this.store.dispatch(TodoActions.addTodo({ task }));
    }
  
    removeTodo(id: number) {
      this.store.dispatch(TodoActions.removeTodo({ id }));
    }
  
    completeTodo(id: number) {
      this.store.dispatch(TodoActions.completeTodo({ id }));
    }
  }

