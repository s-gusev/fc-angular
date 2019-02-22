import { Input } from '@angular/core';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, Component } from '@angular/core';

import { NewsPageComponent } from './news-page.component';
import { NewsService } from '../../services/news.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Article } from '../../models/article.model';


@Component({ selector: 'fc-news-selector', template: '' })
class NewsSelectorStubComponent { }

@Component({ selector: 'fc-news-list', template: '' })
class NewsListStubComponent {
  @Input() articles!: Article[];
  @Input() hasMoreArticles!: boolean;
}

describe('NewsPageComponent', () => {
  let component: NewsPageComponent;
  let fixture: ComponentFixture<NewsPageComponent>;
  const newsServiceSpy = jasmine.createSpyObj('NewsService', ['getById', 'deleteArticle']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        NewsPageComponent,
        NewsSelectorStubComponent,
        NewsListStubComponent,
      ],
      providers: [
        { provide: NewsService, useValue: newsServiceSpy },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
