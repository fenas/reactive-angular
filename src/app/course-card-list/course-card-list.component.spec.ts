import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCardListComponent } from './course-card-list.component';

describe('CourseCardListComponent', () => {
  let component: CourseCardListComponent;
  let fixture: ComponentFixture<CourseCardListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseCardListComponent]
    });
    fixture = TestBed.createComponent(CourseCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
