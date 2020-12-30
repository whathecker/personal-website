import { Request, Response, NextFunction } from 'express';

export const bodyParserErrHandler = (err: Error, _req: Request, res: Response, next: NextFunction): void => {
  if (err) {
    console.error(err);

    if (err.message === 'invalid json') {
      res.status(400).json({ error: 'Invalid content type is used: use json instead' });
    } else {
      next(err);
    }
  }
};
