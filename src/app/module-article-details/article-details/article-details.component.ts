import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
