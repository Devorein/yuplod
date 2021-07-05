import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models';
import { createJsonErrorResponse } from '../utils';

export function auth(throwError?: boolean) {
  throwError = throwError ?? true;
  return async function (req: Request, res: Response, next: NextFunction) {
    let token: string = '';
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    )
      token = req.headers.authorization.split(' ')[1];

    if (!token && throwError)
      createJsonErrorResponse(
        res,
        [{ field: 'token', message: 'Token not provided' }],
        401
      );

    try {
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET as string
      ) as any;
      const users = await User.getById(decoded.id);
      (req as any).user = users[0];
      next();
    } catch (err) {
      if (throwError) {
        createJsonErrorResponse(
          res,
          [{ field: 'token', message: 'Invalid token' }],
          401
        );
      } else {
        next();
      }
    }
  };
}
