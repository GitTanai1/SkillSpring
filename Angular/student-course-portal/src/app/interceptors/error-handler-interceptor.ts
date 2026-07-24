import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';

export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  return next(req).pipe(
    catchError((error) => {
      console.error('Global Error Handler Interceptor caught error:', error);
      if (error.status === 401) {
        console.warn('Unauthorized request - Redirecting to login/home.');
        router.navigate(['/']);
      } else if (error.status === 500) {
        console.error('Server Internal Error (500) detected.');
      }
      return throwError(() => error);
    })
  );
};
