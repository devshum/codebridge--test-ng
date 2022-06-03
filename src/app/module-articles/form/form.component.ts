import { FormControl } from '@angular/forms';
import { Component, ChangeDetectionStrategy, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit, OnDestroy {
  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  public searchInput = new FormControl();
  private _unsubscribe = new Subject();

  ngOnInit(): void {
    this.searchInput.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).pipe(
      takeUntil(this._unsubscribe)
    ).subscribe(value => this.search.emit(value));
  }

  ngOnDestroy(): void {
    this._unsubscribe.next();
  }
}
