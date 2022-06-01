import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'articles'
  },
  { path: 'articles', loadChildren: () => import('./module-articles/articles.module').then(m => m.ArticlesModule) },
  { path: 'articles/:id', loadChildren: () => import('./module-article-details/article-details.module').then(m => m.ArticleDetailsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
