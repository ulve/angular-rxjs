/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IntervallComponent } from './intervall.component';

describe('IntervallComponent', () => {
  let component: IntervallComponent;
  let fixture: ComponentFixture<IntervallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntervallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
