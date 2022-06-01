import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticlesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
