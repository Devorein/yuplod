import { Request, Response } from 'express';
import { IPostUpdate } from 'src/types';
import { Post } from '../models';
import { createJsonErrorResponse, createJsonSuccessResponse } from '../utils';

export async function getAllPosts(_: Request, res: Response) {
  try {
    const posts = await Post.getAll();
    createJsonSuccessResponse(res, posts);
  } catch (err) {
    createJsonErrorResponse(res, [err.message]);
  }
}

export async function getPostById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const posts = await Post.getById(id);
    createJsonSuccessResponse(res, posts);
  } catch (err) {
    createJsonErrorResponse(res, [err.message]);
  }
}

export async function updatePost(
  req: Request<string, any, { data: IPostUpdate }>,
  res: Response
) {
  try {
    const { data } = req.body;
    const post = await Post.update(data);
    createJsonSuccessResponse(res, post);
  } catch (err) {
    createJsonErrorResponse(res, [err.message]);
  }
}
