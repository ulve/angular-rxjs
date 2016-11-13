/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DelkravComponent } from './delkrav.component';

describe('DelkravComponent', () => {
  let component: DelkravComponent;
  let fixture: ComponentFixture<DelkravComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelkravComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelkravComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
