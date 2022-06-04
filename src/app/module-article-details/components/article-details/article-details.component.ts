import { ArticlesDashboardService } from '../../../core/services/articles-dashboard.service';
import { EMPTY, Observable } from 'rxjs';

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Params, Router, } from '@angular/router';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Article } from 'src/app/core/interfaces/article.interface';

@Component({
  selector: 'app-article',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleDetailsComponent implements OnInit {
  public article$: Observable<Article>;
  constructor(
    private _articlesService: ArticlesDashboardService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.article$ = this._activatedRoute.params.pipe(
      map((params: Params) => params.id),
      switchMap((id: string) => this._articlesService.getArticle(id)),
      catchError(() => {
        this._navigateHome();
        return EMPTY;
      }
     )
    );
  }

  public goHome(): void {
    this._navigateHome();
  }

  private _navigateHome(): void {
    this._router.navigate(['/articles']);
  }
}
