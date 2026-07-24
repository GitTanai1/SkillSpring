import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { CourseService } from './course';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  private apiUrl = 'http://localhost:3000/enrollments';
  private enrolledCourseIds = new BehaviorSubject<number[]>([1, 3]);

  constructor(private http: HttpClient, private courseService: CourseService) {
    this.fetchEnrollments();
  }

  private fetchEnrollments() {
    this.http.get<any[]>(this.apiUrl).subscribe({
      next: (data) => {
        const ids = data.map(item => item.courseId);
        this.enrolledCourseIds.next(ids);
      },
      error: (err) => {
        console.warn('API enrollments fetch failed, using default: [1, 3]', err);
      }
    });
  }

  enroll(courseId: number): Observable<any> {
    const current = this.enrolledCourseIds.value;
    if (!current.includes(courseId)) {
      const updated = [...current, courseId];
      this.enrolledCourseIds.next(updated);
      
      return this.http.post<any>(this.apiUrl, { courseId }).pipe(
        catchError(err => {
          console.warn('API post enrollment failed, updated locally only', err);
          return of({ courseId });
        })
      );
    }
    return of(null);
  }

  unenroll(courseId: number): Observable<any> {
    const current = this.enrolledCourseIds.value;
    if (current.includes(courseId)) {
      const updated = current.filter(id => id !== courseId);
      this.enrolledCourseIds.next(updated);
      
      return this.http.get<any[]>(`${this.apiUrl}?courseId=${courseId}`).pipe(
        switchMap(records => {
          if (records && records.length > 0) {
            return this.http.delete<any>(`${this.apiUrl}/${records[0].id}`);
          }
          return of(null);
        }),
        catchError(err => {
          console.warn('API delete enrollment failed, updated locally only', err);
          return of(null);
        })
      );
    }
    return of(null);
  }

  isEnrolled(courseId: number): boolean {
    return this.enrolledCourseIds.value.includes(courseId);
  }

  getEnrolledIdsObservable(): Observable<number[]> {
    return this.enrolledCourseIds.asObservable();
  }

  getEnrolledCourses(): Observable<Course[]> {
    return this.enrolledCourseIds.pipe(
      switchMap(ids => {
        return this.courseService.getCourses().pipe(
          map(courses => courses.filter(c => ids.includes(c.id)))
        );
      })
    );
  }
}
