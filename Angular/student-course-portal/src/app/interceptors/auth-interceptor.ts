import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const cloned = req.clone({
    setHeaders: {
      Authorization: 'Bearer mock-token-12345'
    }
  });
  console.log('Auth Interceptor — Header Added:', cloned.headers.get('Authorization'));
  return next(cloned);
};
