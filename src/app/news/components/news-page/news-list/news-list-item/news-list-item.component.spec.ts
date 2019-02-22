import { TestArticle } from './../../../../../testing/mock-article';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewsListItemComponent } from './news-list-item.component';
import { RouterLinkDirectiveStub } from 'src/app/testing/router-link-directive-stub';
import { TruncatePipe } from 'src/app/shared/pipes/truncate.pipe';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MockAuthService } from 'src/app/testing/news/mock-auth-service';
import { MockActivatedRoute } from 'src/app/testing/news/mock-activated-route';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/news/services/news.service';
import { Location } from '@angular/common';
import { of } from 'rxjs';

describe('NewsListItemComponent', () => {
  let component: NewsListItemComponent;
  let fixture: ComponentFixture<NewsListItemComponent>;
  const newsServiceSpy = jasmine.createSpyObj('NewsService', ['getById', 'deleteArticle']);
  const locationSpy = jasmine.createSpyObj('Location', ['back']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FontAwesomeModule,
        RouterTestingModule,
      ],
      declarations: [NewsListItemComponent, RouterLinkDirectiveStub, TruncatePipe],
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
    fixture = TestBed.createComponent(NewsListItemComponent);
    component = fixture.componentInstance;
    component.article = TestArticle;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
