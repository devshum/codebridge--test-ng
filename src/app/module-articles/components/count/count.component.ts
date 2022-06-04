import { Component, ChangeDetectionStrategy, Input } from '@angular/core';


@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountComponent {
  @Input() count: number;
}
