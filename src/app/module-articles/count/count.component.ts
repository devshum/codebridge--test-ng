import { ArticlesDashboardService } from './../../core/services/articles-dashboard.service';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountComponent implements OnInit {
  @Output() count: EventEmitter<number> = new EventEmitter<number>();
  public count$: Observable<number>
  constructor(
    private _articlesService: ArticlesDashboardService
  ) { }

  ngOnInit(): void {
    this.count$ = this._articlesService
    .getCount()
    .pipe(
      tap(count => this.count.emit(count))
    );
  }

}
