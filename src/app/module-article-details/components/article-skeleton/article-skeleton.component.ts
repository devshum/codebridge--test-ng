import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-article-skeleton',
  templateUrl: './article-skeleton.component.html',
  styleUrls: ['./article-skeleton.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleSkeletonComponent  {

  constructor() { }

}
