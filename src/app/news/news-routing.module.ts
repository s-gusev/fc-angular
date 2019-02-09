import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsPageComponent } from './components/news-page/news-page.component';
import { NewsEditPageComponent } from './components/news-edit-page/news-edit-page.component';
import { NewsViewPageComponent } from './components/news-view-page/news-view-page.component';

const routes: Routes = [
  { path: '', component: NewsPageComponent },
  { path: 'add', component: NewsEditPageComponent },
  { path: 'edit/:id', component: NewsEditPageComponent },
  { path: ':id', component: NewsViewPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
