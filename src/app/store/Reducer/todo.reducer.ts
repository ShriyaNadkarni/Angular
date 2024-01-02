import { createReducer, on } from '@ngrx/store';
import * as TodoActions from 'src/app/store/Actions/todo.actions';

export interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

export interface TodoState {
  todos: Todo[];
}

export const initialState: TodoState = {
  todos: []
};

export const todoReducer = createReducer(
  initialState,
  on(TodoActions.addTodo, (state, { task }) => ({
    ...state,
    todos: [...state.todos, { id: state.todos.length + 1, task, completed: false }]
  })),
  on(TodoActions.removeTodo, (state, { id }) => ({
    ...state,
    todos: state.todos.filter(todo => todo.id !== id)
  })),
  on(TodoActions.completeTodo, (state, { id }) => ({
    ...state,
    todos: state.todos.map(todo => (todo.id === id ? { ...todo, completed: true } : todo))
  }))
);
