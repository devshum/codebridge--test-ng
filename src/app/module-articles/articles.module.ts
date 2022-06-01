import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles/articles.component';
import { ArticlesRoutingModule } from './articles-routing.module';
import { CardComponent } from './card/card.component';
import { SearchComponent } from './search/search.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    ArticlesComponent,
    CardComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    MatCardModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ArticlesModule { }
