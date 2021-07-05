import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models';
import { createJsonErrorResponse } from '../utils';

export function auth(throwError?: boolean) {
  throwError = throwError ?? true;
  return async function (req: Request, res: Response, next: NextFunction) {
    let token: string = '';
    // Check if the authorization bearer token exists in the headers
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
      // Decode the passed jwt token, to extract the user id from it
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET as string
      ) as any;
      // Get the user using the extracted user id and attach it to request object
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
