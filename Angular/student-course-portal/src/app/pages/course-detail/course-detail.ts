import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CourseService } from '../../services/course';
import { EnrollmentService } from '../../services/enrollment';
import { Course } from '../../models/course.model';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';

@Component({
  selector: 'app-course-detail',
  imports: [CommonModule, RouterLink, CreditLabelPipe],
  templateUrl: './course-detail.html',
  styleUrl: './course-detail.css'
})
export class CourseDetail implements OnInit {
  course: Course | undefined;
  isLoading = true;
  errorMsg = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService,
    private enrollmentService: EnrollmentService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const courseId = Number(idParam);
      if (isNaN(courseId)) {
        this.errorMsg = 'Invalid Course ID.';
        this.isLoading = false;
        return;
      }
      this.courseService.getCourseById(courseId).subscribe({
        next: (data) => {
          this.course = data;
          this.isLoading = false;
        },
        error: (err) => {
          console.error(err);
          this.errorMsg = 'Course not found.';
          this.isLoading = false;
        }
      });
    } else {
      this.errorMsg = 'No course ID provided.';
      this.isLoading = false;
    }
  }

  get isEnrolled(): boolean {
    return this.course ? this.enrollmentService.isEnrolled(this.course.id) : false;
  }

  onEnrollToggle(): void {
    if (!this.course) return;
    if (this.isEnrolled) {
      this.enrollmentService.unenroll(this.course.id).subscribe();
    } else {
      this.enrollmentService.enroll(this.course.id).subscribe();
    }
  }
}
