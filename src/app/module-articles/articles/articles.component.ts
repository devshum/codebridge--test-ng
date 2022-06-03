import { ArticlesDashboardService } from './../../core/services/articles-dashboard.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/core/interfaces/article.interface';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticlesComponent implements OnInit {
  public searchFragment: string;
  public articles$: Observable<Article[]>;
  public count: number;
  private _limit = 6;
  private _start = 1;
  constructor(
    private _articlesService: ArticlesDashboardService
  ) { }

  ngOnInit(): void {
    this.articles$ = this._articlesService
    .getArticles(
      { 
        limit: this._limit, 
        start: this._start 
      },
    );
  }

  public onSearch(event: string): void {
    this.searchFragment = event;
    this.articles$ = this._articlesService
    .getArticles(
      { 
        limit: this._limit, 
        start: this._start,
        title: event,
        summary: event
      },
    );
  }

  public trackItem(index: number, item: Article): number {
    return index;
  }
}
