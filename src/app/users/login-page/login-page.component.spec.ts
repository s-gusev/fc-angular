import { AuthService } from './../../shared/services/auth.service';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, EventEmitter } from '@angular/core';

import { LoginPageComponent } from './login-page.component';
import { RouterLinkDirectiveStub } from '../../testing/router-link-directive-stub';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { of, throwError } from 'rxjs';


describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  const authServiceSpy = jasmine.createSpyObj('ValueService', ['login']);
  const locationSpy = jasmine.createSpyObj('Location', ['back']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        FontAwesomeModule,
      ],
      declarations: [
        LoginPageComponent,
        RouterLinkDirectiveStub,
      ],
      providers: [
        { provide: Location, useValue: locationSpy },
        { provide: AuthService, useValue: authServiceSpy }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have link to signin page', () => {
    const linkDes = fixture.debugElement.queryAll(By.directive(RouterLinkDirectiveStub));
    const routerLinks = linkDes.map(de => de.injector.get(RouterLinkDirectiveStub));
    expect(routerLinks.length).toEqual(1);
    expect(routerLinks[0].linkParams).toEqual('../signup');
  });

  it('should show error on invalid login', () => {
    const hostElement = fixture.nativeElement;
    const userNameInput: HTMLInputElement = hostElement.querySelector('#inputUsername');
    const userNamePassword: HTMLInputElement = hostElement.querySelector('#inputPassword');
    let errMessageBlock = hostElement.querySelector('#errMessage');

    expect(errMessageBlock).toBeFalsy();

    userNameInput.value = 'test';
    userNamePassword.value = 'invalid-pass';

    userNameInput.dispatchEvent(new Event('input'));
    userNamePassword.dispatchEvent(new Event('input'));
    authServiceSpy.login.and.returnValue(throwError({ error: { message: 'invalid user/login' } }));

    component.formSubmit();
    fixture.detectChanges();

    errMessageBlock = hostElement.querySelector('#errMessage');
    expect(errMessageBlock).toBeTruthy();
  });

  it('should show go on prev page on succeess login', (done: DoneFn) => {
    const hostElement = fixture.nativeElement;
    const userNameInput: HTMLInputElement = hostElement.querySelector('#inputUsername');
    const userNamePassword: HTMLInputElement = hostElement.querySelector('#inputPassword');

    userNameInput.value = 'test';
    userNamePassword.value = 'invalid-pass';

    userNameInput.dispatchEvent(new Event('input'));
    userNamePassword.dispatchEvent(new Event('input'));

    const backClicked = new EventEmitter();
    backClicked.asObservable().subscribe(() => { done(); });

    authServiceSpy.login.and.returnValue(of({ token: 'Ok', username: 'username' }));
    locationSpy.back.and.callFake(() => {
      backClicked.emit();
    });

    component.formSubmit();
  });
});
