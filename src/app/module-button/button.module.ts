import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { SvgModule } from '../module-svg/svg.module';



@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    CommonModule,
    SvgModule
  ],
  exports: [
    ButtonComponent
  ]
})
export class ButtonModule { }
