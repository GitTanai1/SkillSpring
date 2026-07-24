import { Component, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Course } from '../../models/course.model';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';
import { HighlightDirective } from '../../directives/highlight';
import { selectEnrolledIds } from '../../store/enrollment/enrollment.selectors';
import * as EnrollmentActions from '../../store/enrollment/enrollment.actions';

@Component({
  selector: 'app-course-card',
  imports: [CommonModule, CreditLabelPipe, HighlightDirective],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard implements OnChanges {
  @Input({ required: true }) course!: Course;
  @Input() appHighlight = 'rgba(99, 102, 241, 0.15)';
  @Output() enrollRequested = new EventEmitter<number>();
  @Output() cardClicked = new EventEmitter<number>();

  isExpanded = false;
  enrolledIds$: Observable<number[]>;

  constructor(private store: Store) {
    this.enrolledIds$ = this.store.select(selectEnrolledIds);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('CourseCard ngOnChanges - Course changed:', changes['course']?.previousValue, '=>', changes['course']?.currentValue);
  }

  get gradeStatus(): string {
    return this.course.gradeStatus;
  }

  toggleExpand(event: Event): void {
    event.stopPropagation();
    this.isExpanded = !this.isExpanded;
  }

  onEnrollClick(event: Event, isCurrentlyEnrolled: boolean): void {
    event.stopPropagation();
    if (isCurrentlyEnrolled) {
      this.store.dispatch(EnrollmentActions.unenrollFromCourse({ courseId: this.course.id }));
    } else {
      this.store.dispatch(EnrollmentActions.enrollInCourse({ courseId: this.course.id }));
    }
    this.enrollRequested.emit(this.course.id);
  }

  onCardClick(): void {
    this.cardClicked.emit(this.course.id);
  }

  cardClasses(isEnrolled: boolean): { [key: string]: boolean } {
    return {
      'card--enrolled': isEnrolled,
      'card--full': this.course.credits >= 4,
      'expanded': this.isExpanded
    };
  }
}
