import { TestArticle } from 'src/app/testing/mock-article';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewsEditPageComponent } from './news-edit-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/shared/services/auth.service';
import { NewsService } from '../../services/news.service';
import { ActivatedRoute } from '@angular/router';
import { MockActivatedRoute } from 'src/app/testing/news/mock-activated-route';
import { MockAuthService } from 'src/app/testing/news/mock-auth-service';
import { of } from 'rxjs';

describe('NewsEditPageComponent', () => {
  let component: NewsEditPageComponent;
  let fixture: ComponentFixture<NewsEditPageComponent>;
  const newsServiceSpy = jasmine.createSpyObj('NewsService', ['getById', 'deleteArticle']);
  const locationSpy = jasmine.createSpyObj('Location', ['back']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FontAwesomeModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      declarations: [
        NewsEditPageComponent,
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
    newsServiceSpy.getById.and.returnValue(of(TestArticle));
    fixture = TestBed.createComponent(NewsEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
