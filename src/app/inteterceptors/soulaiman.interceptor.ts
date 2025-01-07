import { HttpInterceptorFn } from '@angular/common/http';

export const soulaimanInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
