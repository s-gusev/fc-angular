import { HttpClient } from '@angular/common/http';
import { AuthService } from './../../shared/services/auth.service';
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NewsService } from './news.service';

describe('Service: News', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NewsService,
        { provide: AuthService, useValue: jasmine.createSpyObj('ValueService', ['getAuthHeders']) },
        { provide: HttpClient, useValue: jasmine.createSpyObj('HttpClient', ['get', 'post', 'delete']) }
      ],
    });
  });

  it('should ...', inject([NewsService], (service: NewsService) => {
    expect(service).toBeTruthy();
  }));
});
