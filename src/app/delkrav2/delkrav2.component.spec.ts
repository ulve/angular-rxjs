/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Delkrav2Component } from './delkrav2.component';

describe('Delkrav2Component', () => {
  let component: Delkrav2Component;
  let fixture: ComponentFixture<Delkrav2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Delkrav2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Delkrav2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
