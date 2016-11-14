/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SiffraComponent } from './siffra.component';

describe('SiffraComponent', () => {
  let component: SiffraComponent;
  let fixture: ComponentFixture<SiffraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiffraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiffraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
