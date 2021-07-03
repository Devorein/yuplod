import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { createJsonErrorResponse } from 'src/utils';
import { User } from '../models';

export async function auth(req: Request, res: Response, next: NextFunction) {
  let token: string = '';
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  )
    token = req.headers.authorization.split(' ')[1];

  if (!token)
    next(
      createJsonErrorResponse(res, ['Not authorized to access this route'], 401)
    );

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as any;
    (req as any).user = await User.getById(decoded.id);
    next();
  } catch (err) {
    next(
      createJsonErrorResponse(res, ['Not authorized to access this route'], 401)
    );
  }
}
