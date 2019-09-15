import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostInvititonComponent } from './post-invititon.component';

describe('PostInvititonComponent', () => {
  let component: PostInvititonComponent;
  let fixture: ComponentFixture<PostInvititonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostInvititonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostInvititonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
