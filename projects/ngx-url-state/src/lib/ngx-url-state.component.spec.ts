import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxUrlStateComponent } from './ngx-url-state.component';

describe('NgxUrlStateComponent', () => {
  let component: NgxUrlStateComponent;
  let fixture: ComponentFixture<NgxUrlStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxUrlStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxUrlStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
