import { ArticleDetailsComponent } from './components/article-details/article-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesRoutingModule } from './article-details-routing.module';
import { ButtonModule } from '../module-button/button.module';
import { ArticleSkeletonComponent } from './components/article-skeleton/article-skeleton.component';



@NgModule({
  declarations: [
    ArticleDetailsComponent,
    ArticleSkeletonComponent
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    ButtonModule
  ]
})
export class ArticleDetailsModule { }
