import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikesCountDialogComponent } from './likes-count-dialog.component';

describe('LikesCountDialogComponent', () => {
  let component: LikesCountDialogComponent;
  let fixture: ComponentFixture<LikesCountDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikesCountDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikesCountDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
