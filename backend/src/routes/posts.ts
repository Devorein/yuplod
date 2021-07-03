import express from 'express';
import {
  deletePost,
  getAllPosts,
  getPostById,
  updatePost
} from '../controllers';

const PostsRouter = express.Router();

PostsRouter.route('/').get(getAllPosts);
PostsRouter.route('/:id').get(getPostById).put(updatePost).delete(deletePost);

export default PostsRouter;
