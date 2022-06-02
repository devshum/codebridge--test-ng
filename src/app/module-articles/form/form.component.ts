import { NgForm } from '@angular/forms';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent {

  constructor(

  ) { }

  public submit(form: NgForm) {
    console.log(form.value.search);
  }
}
