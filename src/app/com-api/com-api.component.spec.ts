import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComAPIComponent } from './com-api.component';

describe('ComAPIComponent', () => {
  let component: ComAPIComponent;
  let fixture: ComponentFixture<ComAPIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComAPIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
