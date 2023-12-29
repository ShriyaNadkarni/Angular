import { ActionReducerMap } from '@ngrx/store';
import { Article } from './article.model'
import { ArticleReducer } from '../app/store/course.reducer';

export interface AppState {
  readonly articles: Array<Article>; 
}

export const reducers: ActionReducerMap<AppState> = {
  articles: ArticleReducer,
};
