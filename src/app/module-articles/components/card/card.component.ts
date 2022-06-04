import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/core/interfaces/article.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  @Input() article: Article;
  @Input() highlightedFragment: string;
  
  constructor(
    private _router: Router
  ) { }

  public openArticleDetails(id: number, event?: any): void {
    if (event && !event.view.getSelection().toString().length) {
      this._navigateArticles(id);
    }

    if(!event) {
      this._navigateArticles(id);
    }
  }

  private _navigateArticles(id: number): void {
    this._router.navigate(['articles', id]);
  }
}
