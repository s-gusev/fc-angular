/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, Component } from '@angular/core';

import { HeaderComponent } from './header.component';
import { RouterLinkDirectiveStub } from '../../../testing/router-link-directive-stub';

@Component({ selector: 'fc-login-logout', template: '' })
class LoginLogoutStubComponent { }

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
        RouterLinkDirectiveStub,
        LoginLogoutStubComponent,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have link to login-logout component', () => {
    const loginlogoutComponent = fixture.debugElement.queryAll(de => de.componentInstance instanceof LoginLogoutStubComponent);
    expect(loginlogoutComponent).toBeTruthy();
    expect(loginlogoutComponent.length).toEqual(1);
  });

  it('should have link to homePage', () => {
    const linkDes = fixture.debugElement.queryAll(By.directive(RouterLinkDirectiveStub));
    const routerLinks = linkDes.map(de => de.injector.get(RouterLinkDirectiveStub));
    expect(routerLinks.length).toEqual(1);
    expect(routerLinks[0].linkParams).toEqual('/');
  });
});
