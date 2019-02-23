/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewsSelectorComponent } from './news-selector.component';

describe('NewsSelectorComponent', () => {
  let component: NewsSelectorComponent;
  let fixture: ComponentFixture<NewsSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewsSelectorComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit event on source chnage', (done: DoneFn) => {
    component.onSourceChanged.subscribe(() => done());
    component.sourceChanged();
  });

  it('should emit event on search', (done: DoneFn) => {
    component.onSearchClicked.subscribe(() => done());
    component.searchClicked();
  });

  it('should emit event on add new', (done: DoneFn) => {
    component.onAdd.subscribe(() => done());
    component.addClicked();
  });
});
