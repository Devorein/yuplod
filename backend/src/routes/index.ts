import express from 'express';
import AuthRouter from './auth';
import PostsRouter from './posts';
import UsersRouter from './users';
import VotesRouter from './votes';

const router = express.Router();

router.use('/posts', PostsRouter);
router.use('/users', UsersRouter);
router.use('/auth', AuthRouter);
router.use('/votes', VotesRouter);

export default router;
