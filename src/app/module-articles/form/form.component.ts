import { FormControl } from '@angular/forms';
import { Component, ChangeDetectionStrategy, OnInit, Output, EventEmitter } from '@angular/core';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit {
  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  public searchInput = new FormControl();

  ngOnInit(): void {
    this.searchInput.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(value => this.search.emit(value));
  }
}
