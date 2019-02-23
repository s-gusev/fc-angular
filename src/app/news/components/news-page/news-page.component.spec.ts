import { TestArticle } from './../../../testing/mock-article';
import { Input } from '@angular/core';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, Component } from '@angular/core';

import { NewsPageComponent } from './news-page.component';
import { NewsService } from '../../services/news.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Article } from '../../models/article.model';
import { of } from 'rxjs';


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
  const newsServiceSpy = jasmine.createSpyObj('NewsService', ['getArticles', 'deleteArticle']);

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

  it('performSearch should call external service', (done: DoneFn) => {
    newsServiceSpy.getArticles.and.callFake(() => { done(); return of([]); });
    component.performSearch('text');
  });

  it('performSearch should call external service', (done: DoneFn) => {
    newsServiceSpy.getArticles.and.callFake(() => { done(); return of([]); });
    component.performSourceChange({ id: 'source_id', name: 'source name' });
  });

  it('delete should call external service', (done: DoneFn) => {
    component.articles = [TestArticle];
    newsServiceSpy.deleteArticle.and.callFake(() => { done(); return of(true); });
    component.deleteArticle(TestArticle);
  });
});
