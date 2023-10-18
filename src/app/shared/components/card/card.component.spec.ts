/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title`, () => {
    const titleMock = 'Title mock';
    component.title = titleMock;
    fixture.detectChanges()
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h6').textContent).toContain(titleMock);
  });

  it(`should render with content in (ng-content)`, () => {
    const element = '<p>Conteúdo teste</p>';
    fixture.detectChanges()
    const card = fixture.nativeElement as HTMLElement;
    card.innerHTML = `<app-card>${element}</app-card>`;
    fixture.detectChanges();
    expect(card.querySelector('p')?.textContent).toContain('Conteúdo teste')
  });
});
