import express from 'express';
import {
  createPost,
  deletePost,
  getAllPosts,
  getPostById,
  updatePost
} from '../controllers';

const PostsRouter = express.Router();

PostsRouter.route('/').get(getAllPosts).post(createPost);
PostsRouter.route('/:id').get(getPostById).put(updatePost).delete(deletePost);

export default PostsRouter;
