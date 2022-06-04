import { ArticlesDashboardService } from '../../../core/services/articles-dashboard.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/core/interfaces/article.interface';
import { Paginator } from 'src/app/core/interfaces/paginator.interface';
import { pluck, tap } from 'rxjs/operators';
import { ArticlesParams } from 'src/app/core/interfaces/articles-params.interface';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticlesComponent implements OnInit {
  public articles$: Observable<Article[]>;
  public limit = 6;
  public start = 1;
  public pageSizeOptions = [6, 10, 20];
  public count: number;
  public searchFragment: string;
  public title: string;
  public summary: string;
  public loading = false;
  public skeletons = [...Array(this.limit)];

  constructor(
    private _articlesService: ArticlesDashboardService
  ) { }

  ngOnInit(): void {
    this._getArticlesData(
      { 
        limit: this.limit, 
        start: this.start 
      }
    );
  }

  public onSearch(event: string): void {
    this.searchFragment = event;
    this.title = event;
    this.summary = event

    this._getArticlesData(
      { 
        limit: this.limit, 
        start: this.start,
        title: this.title,
        summary: this.summary
      }
    );
  }

  public paginate(event: Paginator): void {
    this.limit = event.pageSize;
    this.start = event.pageSize * event.pageIndex + 1;

    this._getArticlesData(
      { 
        limit: this.limit, 
        start: this.start,
        title: this.title,
        summary: this.summary
      }
    );
  }

  public trackArticle(index: number, item: Article): number {
    return index;
  }

  public trackSkeleton(index: number, item: any): number {
    return index;
  }

  private _getArticlesData(query?: Partial<ArticlesParams>) {
    this.articles$ = this._articlesService
      .getArticles(query).pipe(
        tap(resp => this.count = resp.count),
        pluck('articles')
      )
  }
}
