import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { Article } from '../interfaces/article.interface';
import { ArticlesParams } from '../interfaces/articles-params.interface';
import { map } from 'rxjs/operators';
import { ArticlesResponse } from '../interfaces/articles-response.interface';

@Injectable({
  providedIn: 'root'
})
export class ArticlesDashboardService {
  private _apiUrl = environment.apiUrl;

  constructor(private _http: HttpClient) { }

  public getArticles(query?: Partial<ArticlesParams>): Observable<ArticlesResponse> {
    const options = {
      params: new HttpParams()
      .set('_limit', query?.limit || '')
      .set('_start', query?.start || '')
      .set('title_contains', query?.title || '')
      .set('summary_contains', query?.summary || '')
    }

    const articles = this._http.get<Article[]>(`${this._apiUrl}/articles`, options);
    const count = this._http.get<number>(`${this._apiUrl}/articles/count`, options);

    return forkJoin(
      {
        articles,
        count
      }
    ).pipe(
      map((resp: ArticlesResponse) => resp)
    );
  }

  public getArticle(id: string): Observable<Article> {
    return this._http.get<Article>(`${this._apiUrl}/articles/${id}`)
  }
}