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
  // Validates the user input
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
    createJsonErrorResponse(res, errorMessages, 400);
  } else {
    try {
      // Create a user in the database and a token as well
      const user = await User.create(data);
      const token = createJwtToken(user.id);
      createJsonSuccessResponse(res, { user, token });
    } catch (err) {
      if (err.code === '23505') {
        // Duplicate username or email
        createJsonErrorResponse(
          res,
          [
            {
              field: err.constraint,
              message: `Duplicate ${err.constraint} found!`
            }
          ],
          400
        );
      } else {
        createJsonErrorResponse(
          res,
          [{ field: null, message: err.message }],
          400
        );
      }
    }
  }
}

export async function login(
  req: Request<any, any, { data: ILoginInput }>,
  res: Response
) {
  try {
    const { data } = req.body;
    // Checks for the fields in the payload
    if (!data.email && !data.username) {
      createJsonErrorResponse(
        res,
        [{ field: null, message: 'Provide email or username' }],
        400
      );
    }
    let user: IUser | null = null;
    if (data.email) {
      // Check if any user with that email exists
      user = (await User.getByEmailWithPassword(data.email))[0];
      if (!user) {
        createJsonErrorResponse(res, [
          { field: 'email', message: `No user found with that email` }
        ]);
      }
    } else if (data.username) {
      // Check if any user with that username exists
      user = (await User.getByUsernameWithPassword(data.username))[0];
      if (!user) {
        createJsonErrorResponse(res, [
          { field: 'username', message: `No user found with that username` }
        ]);
      }
    }

    if (user) {
      const { password } = user;
      // Check if the payload password matches with the one stored in tdb
      const isMatch = await argon2.verify(password, data.password);
      if (isMatch) {
        createJsonSuccessResponse(res, {
          token: createJwtToken(user.id),
          user
        });
      } else {
        createJsonErrorResponse(
          res,
          [{ field: 'password', message: 'Wrong password' }],
          401
        );
      }
    }
  } catch (err) {
    createJsonErrorResponse(res, [err.message], 400);
  }
}
