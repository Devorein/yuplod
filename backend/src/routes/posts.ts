import express from 'express';
import { getAllPosts, getPostById, updatePost } from '../controllers';

const PostsRouter = express.Router();

PostsRouter.route('/').get(getAllPosts);
PostsRouter.route('/:id').get(getPostById).put(updatePost);

export default PostsRouter;
