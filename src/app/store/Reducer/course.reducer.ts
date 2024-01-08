import { Action } from '@ngrx/store';
import { Article } from '../../../model/article.model';
import { ArticleAction, ArticleActionType } from '../Actions/articles.actions';

const initialState: Array<Article> = [
  {
    id: '1',
    title: 'Angular State Management with NgRx',   
    author: 'Chameera Dulanga',
    publisher: 'SyncFusion'
  },
];

export function ArticleReducer(
  state: Array<Article> = initialState,
  action: Action 
): Array<Article> {
  switch (action.type) {
    case ArticleActionType.ADD_ITEM:
      
      return [...state, (action as ArticleAction).payload];
    default:
      return state;
  }
}

