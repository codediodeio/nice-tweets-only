import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetPage } from './tweet.page';

describe('TweetPage', () => {
  let component: TweetPage;
  let fixture: ComponentFixture<TweetPage>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [TweetPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
