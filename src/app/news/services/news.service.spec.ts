import { HttpClient } from '@angular/common/http';
import { AuthService } from './../../shared/services/auth.service';
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NewsService } from './news.service';
import { TestArticle } from 'src/app/testing/mock-article';

describe('Service: News', () => {
  const httpSpyService = jasmine.createSpyObj('HttpClient', ['get', 'post', 'delete']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NewsService,
        { provide: AuthService, useValue: jasmine.createSpyObj('ValueService', ['getAuthHeders']) },
        { provide: HttpClient, useValue: httpSpyService }
      ],
    });
  });

  it('should create', inject([NewsService], (service: NewsService) => {
    expect(service).toBeTruthy();
  }));

  it('should call external service on getById', (done: DoneFn) => {
    inject([NewsService], (service: NewsService) => {
      httpSpyService.get.and.callFake((args) => {
        expect(args).toContain('http://localhost:3000/news');
        done();
      });
      service.getById('id');
    })();
  });

  it('should call external service on getArticles', (done: DoneFn) => {
    inject([NewsService], (service: NewsService) => {
      httpSpyService.get.and.callFake((args) => {
        expect(args).toContain('http://localhost:3000/news');
        done();
      });
      service.getArticles('sourceid', '', 1);
    })();
  });

  it('should call external service on deleteArticle', (done: DoneFn) => {
    inject([NewsService], (service: NewsService) => {
      httpSpyService.delete.and.callFake((args) => {
        expect(args).toContain('http://localhost:3000/news');
        done();
      });
      service.deleteArticle('id');
    })();
  });

  it('should call external service on upsert', (done: DoneFn) => {
    inject([NewsService], (service: NewsService) => {
      httpSpyService.post.and.callFake((args) => {
        expect(args).toContain('http://localhost:3000/news');
        done();
      });
      service.upsert(TestArticle);
    })();
  });
});
