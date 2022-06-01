import { FooterModule } from './../module-footer/footer.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../module-header/header.module';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';




@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    RouterModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
