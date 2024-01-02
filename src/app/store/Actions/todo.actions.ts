import { createAction, props } from '@ngrx/store';

export const addTodo = createAction('[Todo] Add Todo', props<{ task: string }>());
export const removeTodo = createAction('[Todo] Remove Todo', props<{ id: number }>());
export const completeTodo = createAction('[Todo] Complete Todo', props<{ id: number }>());
