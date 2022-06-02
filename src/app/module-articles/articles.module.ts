import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles/articles.component';
import { ArticlesRoutingModule } from './articles-routing.module';
import { CardComponent } from './card/card.component';
import { SearchComponent } from './search/search.component';
import { MatCardModule } from '@angular/material/card';
import { ButtonModule } from '../module-button/button.module';



@NgModule({
  declarations: [
    ArticlesComponent,
    CardComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    MatCardModule,
    ButtonModule
  ]
})
export class ArticlesModule { }
