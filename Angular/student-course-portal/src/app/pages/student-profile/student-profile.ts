import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Course } from '../../models/course.model';
import { selectEnrolledCourses } from '../../store/enrollment/enrollment.selectors';
import * as EnrollmentActions from '../../store/enrollment/enrollment.actions';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-student-profile',
  imports: [CommonModule, CreditLabelPipe, RouterLink],
  templateUrl: './student-profile.html',
  styleUrl: './student-profile.css'
})
export class StudentProfile {
  enrolledCourses$: Observable<Course[]>;
  studentName = 'Alex Mercer';
  studentEmail = 'alex.mercer@university.edu';
  studentId = 'STU-2026-981';

  constructor(private store: Store) {
    this.enrolledCourses$ = this.store.select(selectEnrolledCourses);
  }

  get totalCredits$(): Observable<number> {
    return this.enrolledCourses$.pipe(
      map(courses => courses.reduce((sum, c) => sum + c.credits, 0))
    );
  }

  onUnenroll(courseId: number): void {
    this.store.dispatch(EnrollmentActions.unenrollFromCourse({ courseId }));
  }
}
