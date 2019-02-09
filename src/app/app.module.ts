import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { NewsModule } from './news/news.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NewsModule,
    NgbModule, // opt: bundle could be reduced by including only required bootstrap modules, like NgbPaginationModule, NgbAlertModule, ...
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
