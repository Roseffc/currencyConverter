/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StatusCurrencyComponent } from './status-currency.component';

describe('StatusCurrencyComponent', () => {
  let component: StatusCurrencyComponent;
  let fixture: ComponentFixture<StatusCurrencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusCurrencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have value in format currency', () => {
    component.coin = '10.20';
    fixture.detectChanges()
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p')?.textContent).toContain('R$10.20');
  });

  it('should have a red value when it is equal to or less than 1', () => {
    component.coin = '1.00';
    fixture.detectChanges()
    const compiled = fixture.nativeElement.querySelector('p');
    expect(compiled.classList).toContain("text-color--red");
  });

  it('should have a red value when it is greater than 1 and less than or equal to 5', () => {
    component.coin = '5.00';
    fixture.detectChanges()
    const compiled = fixture.nativeElement.querySelector('p');
    expect(compiled.classList).toContain("text-color--green");
  });

  it('should have a red value when it is greater than 5', () => {
    component.coin = '6.00';
    fixture.detectChanges()
    const compiled = fixture.nativeElement.querySelector('p');
    expect(compiled.classList).toContain("text-color--blue");
  });

});
