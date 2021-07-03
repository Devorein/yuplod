import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models';
import { IRequest, IUserCreate } from '../types';
import {
  checkFields,
  createJsonErrorResponse,
  createJsonSuccessResponse,
  validateEmail,
  validatePassword
} from '../utils';

export async function getAllUsers(_: Request, res: Response) {
  try {
    const users = await User.getAll();
    createJsonSuccessResponse(res, users);
  } catch (err) {
    createJsonErrorResponse(res, [err.message]);
  }
}

export async function getUserById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const users = await User.getById(id);
    createJsonSuccessResponse(res, users);
  } catch (err) {
    createJsonErrorResponse(res, [err.message]);
  }
}

export async function createUser(
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

export async function deleteUser(req: Request, res: Response) {
  const { user } = req as IRequest;
  try {
    await User.delete(user.id);
    createJsonSuccessResponse(res, null);
  } catch (err) {
    createJsonErrorResponse(res, [err.message]);
  }
}
