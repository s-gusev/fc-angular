/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { defer } from 'rxjs';
import { doesNotThrow } from 'assert';

describe('Service: Auth', () => {
  const userName = 'someUserName';
  const serverResponse = { token: 'auth_token', username: userName };
  let httpClientSpy: { post: jasmine.Spy };
  let authService: AuthService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    httpClientSpy.post.and.returnValue(defer(() => Promise.resolve(serverResponse)));
    authService = new AuthService(httpClientSpy as any);
    authService.logout();
  });

  it('should create the service', () => {
    expect(authService).toBeTruthy();
  });

  it('should return empty values by default', () => {
    expect(authService.isLoggedIn()).toBeFalsy();
    expect(authService.getUserName()).toBeNull();
  });

  it('should store user info after login', () => {
    authService.login(userName, 'somePass').subscribe(
      () => {
        expect(authService.isLoggedIn()).toBeTruthy();
        expect(authService.getUserName()).toEqual(userName);
      }
    );
  });

  it('should clear user info after logout', () => {
    authService.login(userName, 'somePass').subscribe(
      () => {
        expect(authService.isLoggedIn()).toBeTruthy();
        expect(authService.getUserName()).toEqual(userName);

        authService.logout();

        expect(authService.isLoggedIn()).toBeFalsy();
        expect(authService.getUserName()).toBeNull();
      }
    );
  });

  it('should emit event on login', (done: DoneFn) => {
    authService.loginStateChanged.asObservable().subscribe(
      () => {
        expect(authService.isLoggedIn()).toBeTruthy();
        done();
      }
    );
    authService.login(userName, 'somePass').subscribe();
  });

  it('should emit event on logout', (done: DoneFn) => {
    authService.login(userName, 'somePass').subscribe(() => {
      authService.loginStateChanged.asObservable().subscribe(
        () => {
          expect(authService.isLoggedIn()).toBeFalsy();
          done();
        }
      );
      authService.logout();
    });
  });

});
