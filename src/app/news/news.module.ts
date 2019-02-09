import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsListComponent } from './components/news-list/news-list.component';
import { NewsWidgetComponent } from './components/news-widget/news-widget.component';
import { NewsSelectorComponent } from './components/news-selector/news-selector.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  declarations: [
    NewsListComponent,
    NewsWidgetComponent,
    NewsSelectorComponent,
  ]
  ,
  exports: [
    NewsWidgetComponent,
  ],
})
export class NewsModule { }
