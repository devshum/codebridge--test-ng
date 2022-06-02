import { ArticlesDashboardService } from './../../core/services/articles-dashboard.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck, tap } from 'rxjs/operators';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticlesComponent implements OnInit {
  public articles$: Observable<any>;
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

    this.articles$.subscribe(res => console.log(res))
  }

}
