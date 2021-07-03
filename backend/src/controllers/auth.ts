import argon2 from 'argon2';
import { Request, Response } from 'express';
import { User } from '../models';
import { ILoginInput, IUser, IUserCreate } from '../types';
import {
  checkFields,
  createJsonErrorResponse,
  createJsonSuccessResponse,
  createJwtToken,
  validateEmail,
  validatePassword
} from '../utils';

export async function register(
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
      const token = createJwtToken(user.id);
      createJsonSuccessResponse(res, { user, token });
    } catch (err) {
      createJsonErrorResponse(res, [err.message]);
    }
  }
}

export async function login(
  req: Request<any, any, { data: ILoginInput }>,
  res: Response
) {
  try {
    const { data } = req.body;
    if (!data.username && !data.email) {
      createJsonErrorResponse(res, ['Provide username or email']);
    }
    let user: IUser | null = null;
    if (data.email) {
      user = (await User.getByEmailWithPassword(data.email))[0];
    } else if (data.username) {
      user = (await User.getByUsernameWithPassword(data.username))[0];
    }

    if (!user) {
      createJsonErrorResponse(res, ["User doesn't exist"]);
    } else {
      const { password } = user;
      const isMatch = await argon2.verify(password, data.password);
      if (isMatch) {
        createJsonSuccessResponse(res, { token: createJwtToken(user.id) });
      } else {
        createJsonErrorResponse(res, ['Wrong password']);
      }
    }
  } catch (err) {
    createJsonErrorResponse(res, [err.message]);
  }
}
