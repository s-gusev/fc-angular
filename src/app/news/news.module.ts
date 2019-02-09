import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsListComponent } from './components/news-list/news-list.component';
import { NewsWidgetComponent } from './components/news-widget/news-widget.component';
import { NewsSelectorComponent } from './components/news-selector/news-selector.component';

@NgModule({
  imports: [
    CommonModule
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
