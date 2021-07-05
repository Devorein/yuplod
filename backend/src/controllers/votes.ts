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
    const votes = await Vote.create(data, user.id);
    createJsonSuccessResponse(res, votes);
  } catch (err) {
    createJsonErrorResponse(res, [err.message]);
  }
}

export async function updateVote(
  req: Request<any, any, { data: { post_id: number; amount: number } }>,
  res: Response
) {
  try {
    const { data } = req.body;
    const { user } = req as IRequest;
    const votes = await Vote.update(data, user.id);
    createJsonSuccessResponse(res, votes);
  } catch (err) {
    createJsonErrorResponse(res, [err.message]);
  }
}

export async function deleteVote(
  req: Request<any, any, { data: { post_id: number } }>,
  res: Response
) {
  try {
    const { data } = req.body;
    const { user } = req as IRequest;
    const votes = await Vote.delete(data.post_id, user.id);
    createJsonSuccessResponse(res, votes);
  } catch (err) {
    createJsonErrorResponse(res, [err.message]);
  }
}
