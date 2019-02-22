/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LoginLogoutComponent } from './login-logout.component';
import { RouterLinkDirectiveStub } from 'src/app/testing/router-link-directive-stub';
import { AuthService } from '../../services/auth.service';
import { MockAuthService } from 'src/app/testing/news/mock-auth-service';
import { ActivatedRoute } from '@angular/router';
import { MockActivatedRoute } from 'src/app/testing/news/mock-activated-route';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginLogoutComponent', () => {
  let component: LoginLogoutComponent;
  let fixture: ComponentFixture<LoginLogoutComponent>;
  const locationSpy = jasmine.createSpyObj('Location', ['back']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [LoginLogoutComponent, RouterLinkDirectiveStub ],
      providers: [
        { provide: AuthService, useClass: MockAuthService },
        { provide: Location, useValue: locationSpy },
        { provide: ActivatedRoute, useClass: MockActivatedRoute }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
