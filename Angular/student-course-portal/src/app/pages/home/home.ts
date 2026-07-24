import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseService } from '../../services/course';
import { EnrollmentService } from '../../services/enrollment';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit, OnDestroy {

  portalName = 'Student Course Portal';


  isPortalActive = true;


  message = '';


  searchTerm = '';


  coursesCount = 0;
  enrolledCount = 0;
  gpa = 3.8;



  constructor(
    private courseService: CourseService,
    private enrollmentService: EnrollmentService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.courseService.getCourses().subscribe(courses => {
      this.coursesCount = courses.length;
      console.log('HomeComponent initialised — courses loaded');
    });

    this.enrollmentService.getEnrolledIdsObservable().subscribe(ids => {
      this.enrolledCount = ids.length;
    });
  }

  ngOnDestroy(): void {

    console.log('HomeComponent destroyed');
  }

  onEnrollClick(): void {
    this.message = 'Enrollment opened!';
    setTimeout(() => {
      this.router.navigate(['/courses']);
    }, 800);
  }
}
