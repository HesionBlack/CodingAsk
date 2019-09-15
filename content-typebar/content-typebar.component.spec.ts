import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTypebarComponent } from './content-typebar.component';

describe('ContentTypebarComponent', () => {
  let component: ContentTypebarComponent;
  let fixture: ComponentFixture<ContentTypebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentTypebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentTypebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
