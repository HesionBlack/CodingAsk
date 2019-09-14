import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvdetialComponent } from './invdetial.component';

describe('InvdetialComponent', () => {
  let component: InvdetialComponent;
  let fixture: ComponentFixture<InvdetialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvdetialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvdetialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
