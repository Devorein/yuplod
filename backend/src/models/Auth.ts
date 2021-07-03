import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models';
import { IUserCreate } from '../types';
import {
  checkFields,
  createJsonErrorResponse,
  createJsonSuccessResponse,
  validateEmail,
  validatePassword
} from '../utils';

export default class Auth {
  static async register(
    req: Request<any, any, { data: IUserCreate }>,
    res: Response
  ) {
    const { data } = req.body;
    const errorMessages = checkFields(data, [
      [
        'email',
        (email: string) => {
          const isValid = validateEmail(email);
          if (isValid) return true;
          else return 'Invalid email provided';
        }
      ],
      'first_name',
      'last_name',
      [
        'password',
        (password: string) =>
          validatePassword(password)
            ? true
            : 'Password must contain at least 1 lowercase, 1 uppercase, 1 digit and 8 characters'
      ],
      'username'
    ]);
    if (errorMessages.length !== 0) {
      createJsonErrorResponse(res, errorMessages);
    } else {
      try {
        const user = await User.create(data);
        const token = jwt.sign(
          { id: user.id },
          process.env.JWT_SECRET as string,
          {
            expiresIn: process.env.JWT_EXPIRE
          }
        );
        createJsonSuccessResponse(res, { user, token });
      } catch (err) {
        createJsonErrorResponse(res, [err.message]);
      }
    }
  }
}
