import { Request, Response } from 'express';
import { IPostCreate, IPostUpdate, IRequest } from 'src/types';
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

  try {
    const { user } = req as any as IRequest;
    const post = await Post.update(id, data, user.id);
    if (!post) {
      createJsonErrorResponse(
        res,
        [{ field: null, message: 'Unauthorized to perform this action' }],
        401
      );
    } else {
      createJsonSuccessResponse(res, post);
    }
  } catch (err) {
    createJsonErrorResponse(res, [err.message]);
  }
}

export async function deletePost(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { user } = req as any as IRequest;
    const post = await Post.delete(id, user.id);
    if (!post) {
      createJsonErrorResponse(
        res,
        [{ field: null, message: 'Unauthorized to perform this action' }],
        401
      );
    } else {
      createJsonSuccessResponse(res, { deleted: 1 });
    }
  } catch (err) {
    createJsonErrorResponse(res, [err.message]);
  }
}

export async function createPost(
  req: Request<any, any, { data: IPostCreate }>,
  res: Response
) {
  const { data } = req.body;
  const errorMessages = checkFields(data, ['caption', 'image_url']);
  if (errorMessages.length !== 0) {
    createJsonErrorResponse(res, errorMessages);
  } else {
    try {
      const { user } = req as any as IRequest;
      const post = await Post.create(data, user.id);
      createJsonSuccessResponse(res, post);
    } catch (err) {
      createJsonErrorResponse(res, [err.message]);
    }
  }
}
