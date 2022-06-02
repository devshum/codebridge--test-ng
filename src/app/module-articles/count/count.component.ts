import { ArticlesDashboardService } from './../../core/services/articles-dashboard.service';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountComponent implements OnInit {
  public count$: Observable<number>
  constructor(
    private _articlesService: ArticlesDashboardService
  ) { }

  ngOnInit(): void {
    this.count$ = this._articlesService.getCount();
  }

}
