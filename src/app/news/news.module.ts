import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsPageComponent } from './components/news-page/news-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NewsSelectorComponent } from './components/news-page/news-selector/news-selector.component';
import { NewsListComponent } from './components/news-page/news-list/news-list.component';
import { NewsListItemComponent } from './components/news-page/news-list/news-list-item/news-list-item.component';


@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  declarations: [
    NewsPageComponent,
    NewsSelectorComponent,
    NewsListComponent,
    NewsListItemComponent,
  ]
  ,
  exports: [
    NewsPageComponent,
  ],
})
export class NewsModule { }
