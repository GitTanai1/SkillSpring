import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'http://localhost:3000/courses';


  private fallbackCourses: Course[] = [
    { id: 1, name: 'Data Structures & Algorithms', code: 'CS101', credits: 4, gradeStatus: 'passed' },
    { id: 2, name: 'Database Management Systems', code: 'CS102', credits: 3, gradeStatus: 'pending' },
    { id: 3, name: 'Web Development', code: 'CS103', credits: 3, gradeStatus: 'passed' },
    { id: 4, name: 'Software Engineering', code: 'CS104', credits: 4, gradeStatus: 'failed' },
    { id: 5, name: 'Artificial Intelligence', code: 'CS105', credits: 4, gradeStatus: 'pending' }
  ];

  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl).pipe(
      catchError(err => {
        console.warn('API call failed, using fallback in-memory database:', err);
        return of(this.fallbackCourses);
      })
    );
  }

  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/${id}`).pipe(
      catchError(err => {
        console.warn(`API call failed for ID ${id}, using fallback data:`, err);
        const course = this.fallbackCourses.find(c => c.id === id);
        if (course) return of(course);
        throw err;
      })
    );
  }

  createCourse(course: Omit<Course, 'id'>): Observable<Course> {
    return this.http.post<Course>(this.apiUrl, course).pipe(
      catchError(err => {
        console.warn('API create course failed, modifying in-memory fallback:', err);
        const newCourse: Course = { ...course, id: Date.now() };
        this.fallbackCourses.push(newCourse);
        return of(newCourse);
      })
    );
  }

  updateCourse(course: Course): Observable<Course> {
    return this.http.put<Course>(`${this.apiUrl}/${course.id}`, course).pipe(
      catchError(err => {
        console.warn('API update course failed, modifying in-memory fallback:', err);
        const index = this.fallbackCourses.findIndex(c => c.id === course.id);
        if (index > -1) {
          this.fallbackCourses[index] = course;
        }
        return of(course);
      })
    );
  }

  deleteCourse(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`).pipe(
      catchError(err => {
        console.warn('API delete course failed, modifying in-memory fallback:', err);
        this.fallbackCourses = this.fallbackCourses.filter(c => c.id !== id);
        return of({ id });
      })
    );
  }
}
