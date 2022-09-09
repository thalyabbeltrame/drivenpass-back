// eslint-disable-next-line import/no-unresolved
import { NextFunction, Request, Response } from 'express';
import { stripHtml } from 'string-strip-html';

export function sanitizeData(req: Request, _res: Response, next: NextFunction) {
  if (!req.body) return next();

  Object.keys(req.body).forEach((key) => {
    if (typeof req.body[key] === 'string') {
      req.body[key] = stripHtml(req.body[key]).result.trim();
    }
  });

  next();
}
