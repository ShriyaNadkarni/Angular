// state.model.ts

import { ActionReducerMap } from '@ngrx/store';
import { Article } from './article.model';
import { EmployeeState , employeeReducer } from 'src/app/store/Reducer/employee.reducer';
import { ArticleReducer } from 'src/app/store/Reducer/course.reducer';

export interface AppState {
  readonly articles: Article[];
  employees: EmployeeState; 
}

export const reducers: ActionReducerMap<AppState> = {
  articles: ArticleReducer,
  employees: employeeReducer,
};
