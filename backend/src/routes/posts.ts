import express from 'express';
import {
  createPost,
  deletePost,
  getAllPosts,
  getPostById,
  updatePost
} from '../controllers';
import { auth } from '../middlewares';

const PostsRouter = express.Router();

PostsRouter.route('/').get(getAllPosts).post(auth, createPost);
PostsRouter.route('/:id')
  .get(getPostById)
  .put(auth, updatePost)
  .delete(auth, deletePost);

export default PostsRouter;
