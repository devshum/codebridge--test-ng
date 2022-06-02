import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
