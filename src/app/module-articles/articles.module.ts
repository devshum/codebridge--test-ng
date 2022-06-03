import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './components/articles/articles.component';
import { ArticlesRoutingModule } from './articles-routing.module';
import { CardComponent } from './components/card/card.component';
import { FormComponent } from './components/form/form.component';
import { MatCardModule } from '@angular/material/card';
import { ButtonModule } from '../module-button/button.module';
import { SvgModule } from '../module-svg/svg.module';
import { CountComponent } from './components/count/count.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { HighlightDirective } from '../core/directives/highlight.directive';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CardSkeletonComponent } from './components/card-skeleton/card-skeleton.component';



@NgModule({
  declarations: [
    ArticlesComponent,
    CardComponent,
    FormComponent,
    CountComponent,
    HighlightDirective,
    CardSkeletonComponent
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    MatCardModule,
    ButtonModule,
    SvgModule,
    ReactiveFormsModule,
    LazyLoadImageModule,
    MatPaginatorModule
  ]
})
export class ArticlesModule { }
