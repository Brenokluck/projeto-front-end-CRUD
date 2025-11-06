import { HttpEvent, HttpInterceptorFn } from '@angular/common/http';
import { Observable } from 'rxjs';

export const requestInterceptorInterceptor: HttpInterceptorFn = (
  req,
  next
): Observable<HttpEvent<unknown>> => {
  const reqIntercepted = req.clone({
    url: `/api${req.url}`,
  });

  return next(reqIntercepted);
};
