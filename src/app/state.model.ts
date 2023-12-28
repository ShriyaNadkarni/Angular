import { ActionReducerMap } from '@ngrx/store';
import { Article } from 'src/module/article.model';
import { ArticleReducer } from './course.reducer'

export interface AppState {
  readonly articles: Array<Article>; 
}

export const reducers: ActionReducerMap<AppState> = {
  articles: ArticleReducer,
};
