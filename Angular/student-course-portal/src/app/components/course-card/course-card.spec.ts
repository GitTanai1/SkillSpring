import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseCard } from './course-card';
import { By } from '@angular/platform-browser';
import { SimpleChange } from '@angular/core';
import { provideMockStore } from '@ngrx/store/testing';

describe('CourseCard', () => {
  let component: CourseCard;
  let fixture: ComponentFixture<CourseCard>;

  const mockCourse = {
    id: 1,
    name: 'Data Structures',
    code: 'CS101',
    credits: 4,
    gradeStatus: 'passed' as const
  };

  const initialState = {
    enrollment: {
      enrolledCourseIds: [1, 3]
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCard],
      providers: [
        provideMockStore({ initialState })
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCard);
    component = fixture.componentInstance;
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should render course input fields', () => {
    component.course = mockCourse;
    fixture.detectChanges();

    const titleEl = fixture.debugElement.query(By.css('.course-name')).nativeElement;
    expect(titleEl.textContent).toContain('Data Structures');

    const codeEl = fixture.debugElement.query(By.css('.course-code')).nativeElement;
    expect(codeEl.textContent).toContain('CS101');
  });


  it('should emit enrollRequested on button click', () => {
    component.course = mockCourse;
    fixture.detectChanges();

    spyOn(component.enrollRequested, 'emit');

    const enrollButton = fixture.debugElement.query(By.css('.card-actions button.btn-primary'));
    enrollButton.nativeElement.click();

    expect(component.enrollRequested.emit).toHaveBeenCalledWith(1);
  });


  it('should log when course changes via ngOnChanges', () => {
    spyOn(console, 'log');

    component.course = mockCourse;
    component.ngOnChanges({
      course: new SimpleChange(null, mockCourse, true)
    });

    expect((console.log as jasmine.Spy).calls.mostRecent().args[0]).toContain('CourseCard ngOnChanges');
  });
});
