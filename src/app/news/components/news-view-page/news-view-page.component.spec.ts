import { Article } from './../../models/article.model';
import { AuthService } from './../../../shared/services/auth.service';
import { RouterTestingModule } from '@angular/router/testing';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, EventEmitter } from '@angular/core';

import { NewsViewPageComponent } from './news-view-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NewsService } from '../../services/news.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { of } from 'rxjs';

describe('NewsViewPageComponent', () => {
  let component: NewsViewPageComponent;
  let fixture: ComponentFixture<NewsViewPageComponent>;
  const newsServiceSpy = jasmine.createSpyObj('NewsService', ['getById', 'deleteArticle']);
  const locationSpy = jasmine.createSpyObj('Location', ['back']);
  class MockActivatedRoute {
    snapshot = {
      paramMap: { get(name) { return 1; } },
      routeConfig: { children: { filter: () => { } } }
    };
  }

  class MockAuthService {
    private username?: string;

    loginStateChanged = new EventEmitter();

    isLoggedIn(): boolean {
      return !!this.username;
    }

    getUserName(): string {
      return this.username;
    }

    login(username?: string) {
      this.username = username;
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FontAwesomeModule,
        RouterTestingModule,
      ],
      declarations: [
        NewsViewPageComponent,
      ],
      providers: [
        { provide: AuthService, useClass: MockAuthService },
        { provide: Location, useValue: locationSpy },
        { provide: NewsService, useValue: newsServiceSpy },
        { provide: ActivatedRoute, useClass: MockActivatedRoute }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    newsServiceSpy.getById.and.returnValue(of({ source: { id: 'abc-news', name: 'news soure' } }));
    fixture = TestBed.createComponent(NewsViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
