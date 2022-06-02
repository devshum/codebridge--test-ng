import { ArticleDetailsComponent } from './article-details/article-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesRoutingModule } from './article-details-routing.module';
import { ButtonModule } from '../module-button/button.module';



@NgModule({
  declarations: [
    ArticleDetailsComponent
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    ButtonModule
  ]
})
export class ArticleDetailsModule { }
