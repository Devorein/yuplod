import { Request, Response } from 'express';
import { IUserCreate } from 'src/types';
import { User } from '../models';
import {
  checkFields,
  createJsonErrorResponse,
  createJsonSuccessResponse
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
    'email',
    'first_name',
    'last_name',
    'password',
    'username'
  ]);
  if (errorMessages.length !== 0) {
    createJsonErrorResponse(res, errorMessages);
  } else {
    try {
      const user = await User.create(data);
      createJsonSuccessResponse(res, user);
    } catch (err) {
      createJsonErrorResponse(res, err.message);
    }
  }
}
