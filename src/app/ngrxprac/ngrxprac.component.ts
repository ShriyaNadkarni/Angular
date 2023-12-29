import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { State, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Article } from '../../model/article.model';
import { AddArticleAction } from '../store/articles.actions';
import { AppState } from '../../model/state.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ngrxprac',
  standalone: true,
  imports: [CommonModule , FormsModule],
  templateUrl: './ngrxprac.component.html',
  styleUrl: './ngrxprac.component.css'
})
export class NgrxpracComponent implements OnInit{
  articles$: Observable<Array<Article>> | undefined;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.articles$ = this.store.select((store) => store.articles);
  }

  addArticle(form: NgForm) {
    this.store.dispatch(new AddArticleAction(form.value));
    form.reset();
  }

}
