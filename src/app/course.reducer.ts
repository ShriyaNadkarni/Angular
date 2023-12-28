import { Action } from '@ngrx/store';
import { Article } from 'src/module/article.model';
import { ArticleAction, ArticleActionType } from './articles.actions';

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
  action: Action // Use the base Action type here
): Array<Article> {
  switch (action.type) {
    case ArticleActionType.ADD_ITEM:
      // Make sure to check the action type and cast it to the appropriate type
      return [...state, (action as ArticleAction).payload];
    default:
      return state;
  }
}
