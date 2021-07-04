import { Request, Response } from 'express';
import { IRequest } from 'src/types';
import { Vote } from '../models';
import { createJsonErrorResponse, createJsonSuccessResponse } from '../utils';

export async function createVote(
  req: Request<any, any, { data: { post_id: number; amount: number } }>,
  res: Response
) {
  try {
    const { data } = req.body;
    const { user } = req as IRequest;
    const posts = await Vote.create(data, user.id);
    createJsonSuccessResponse(res, posts);
  } catch (err) {
    createJsonErrorResponse(res, [err.message]);
  }
}
