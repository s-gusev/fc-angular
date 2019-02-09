import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsListComponent } from './components/news-list/news-list.component';
import { NewsPageComponent } from './components/news-page/news-page.component';
import { NewsSelectorComponent } from './components/news-selector/news-selector.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NewsListItemComponent } from './components/news-list/news-list-item/news-list-item.component';


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
