import { Request, Response } from 'express';
import { IPostCreate, IPostUpdate } from 'src/types';
import { Post } from '../models';
import {
  checkFields,
  createJsonErrorResponse,
  createJsonSuccessResponse
} from '../utils';

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
  req: Request<{ id: string }, any, { data: IPostUpdate }>,
  res: Response
) {
  const { data } = req.body,
    { id } = req.params;
  const messages = checkFields(data, ['caption', 'image_url']);
  if (messages.length !== 0) {
    createJsonErrorResponse(res, messages);
  } else {
    try {
      const post = await Post.update(id, data);
      createJsonSuccessResponse(res, post);
    } catch (err) {
      createJsonErrorResponse(res, [err.message]);
    }
  }
}

export async function deletePost(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await Post.delete(id);
    createJsonSuccessResponse(res, null);
  } catch (err) {
    createJsonErrorResponse(res, [err.message]);
  }
}

export async function createPost(
  req: Request<any, any, { data: IPostCreate }>,
  res: Response
) {
  const { data } = req.body;
  const messages = checkFields(data, ['caption', 'image_url']);
  if (messages.length !== 0) {
    createJsonErrorResponse(res, messages);
  } else {
    try {
      const post = await Post.create(data);
      createJsonSuccessResponse(res, post);
    } catch (err) {
      createJsonErrorResponse(res, [err.message]);
    }
  }
}
