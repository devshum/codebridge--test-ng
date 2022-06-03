import { ArticlesDashboardService } from '../../../core/services/articles-dashboard.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/core/interfaces/article.interface';
import { Paginator } from 'src/app/core/interfaces/paginator.interface';

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
  public pageSizeOptions = [6, 10, 20];
  public limit = 6;
  public start = 1;
  public title: string;
  public summary: string;
  public loading = false;
  public skeletons = [...Array(this.limit)];
  constructor(
    private _articlesService: ArticlesDashboardService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.articles$ = this._articlesService
      .getArticles(
        { 
          limit: this.limit, 
          start: this.start 
        },
      )
  }

  public onSearch(event: string): void {
    this.searchFragment = event;
    this.title = event;
    this.summary = event

    this.articles$ = this._articlesService
    .getArticles(
      { 
        limit: this.limit, 
        start: this.start,
        title: this.title,
        summary: this.summary
      },
    );
  }

  public paginate(event: Paginator): void {
    this.limit = event.pageSize;
    this.start = event.pageSize * event.pageIndex + 1;

    this.articles$ = this._articlesService
    .getArticles(
      { 
        limit: this.limit, 
        start: this.start,
        title: this.title,
        summary: this.summary
      },
    );
  }

  public trackArticle(index: number, item: Article): number {
    return index;
  }

  public trackSkeleton(index: number, item: any): number {
    return index;
  }
}
