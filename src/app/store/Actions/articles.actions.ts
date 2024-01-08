import { Action } from '@ngrx/store';
import { Article } from '../../../model/article.model';

export enum ArticleActionType {
  ADD_ITEM = '[Article] Add Article',
}

export class AddArticleAction implements Action {
  readonly type = ArticleActionType.ADD_ITEM;
  constructor(public payload: Article) {}
}

export type ArticleAction = AddArticleAction;

