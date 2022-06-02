import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles/articles.component';
import { ArticlesRoutingModule } from './articles-routing.module';
import { CardComponent } from './card/card.component';
import { FormComponent } from './form/form.component';
import { MatCardModule } from '@angular/material/card';
import { ButtonModule } from '../module-button/button.module';
import { SvgModule } from '../module-svg/svg.module';
import { CountComponent } from './count/count.component';
import { FormsModule }   from '@angular/forms';



@NgModule({
  declarations: [
    ArticlesComponent,
    CardComponent,
    FormComponent,
    CountComponent
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    MatCardModule,
    ButtonModule,
    SvgModule,
    FormsModule
  ]
})
export class ArticlesModule { }
