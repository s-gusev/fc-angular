import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';

@Component({ selector: 'fc-header', template: '' })
class HeaderStubComponent { }

@Component({ selector: 'fc-footer', template: '' })
class FooterStubComponent { }

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        HeaderStubComponent,
        FooterStubComponent,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have header component`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const headerComponent = fixture.debugElement.queryAll(de => de.componentInstance instanceof HeaderStubComponent);
    expect(headerComponent).toBeTruthy();
    expect(headerComponent.length).toEqual(1);
  });

  it('should have footer Component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const footerComponent = fixture.debugElement.queryAll(de => de.componentInstance instanceof FooterStubComponent);
    expect(footerComponent).toBeTruthy();
    expect(footerComponent.length).toEqual(1);
  });
});
