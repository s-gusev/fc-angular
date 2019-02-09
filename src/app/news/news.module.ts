import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsPageComponent } from './components/news-page/news-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NewsSelectorComponent } from './components/news-page/news-selector/news-selector.component';
import { NewsListComponent } from './components/news-page/news-list/news-list.component';
import { NewsListItemComponent } from './components/news-page/news-list/news-list-item/news-list-item.component';
import { NewsRoutingModule } from './news-routing.module';
import { NewsEditPageComponent } from './components/news-edit-page/news-edit-page.component';
import { NewsViewPageComponent } from './components/news-view-page/news-view-page.component';


@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    NewsRoutingModule,
  ],
  declarations: [
    NewsPageComponent,
    NewsSelectorComponent,
    NewsListComponent,
    NewsListItemComponent,
    NewsEditPageComponent,
    NewsViewPageComponent,
  ],
  exports: [
    NewsPageComponent,
  ],
})
export class NewsModule { }
