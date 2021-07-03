import { Request, Response } from 'express';
import { User } from '../models';
import { createJsonErrorResponse, createJsonSuccessResponse } from '../utils';

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
