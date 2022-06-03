import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Article } from 'src/app/core/interfaces/article.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {
  @Input() article: Article;
  @Input() highlightedFragment: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
