import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZippyContentComponent } from './zippy-content.component';

describe('ZippyContentComponent', () => {
  let component: ZippyContentComponent;
  let fixture: ComponentFixture<ZippyContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZippyContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZippyContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
