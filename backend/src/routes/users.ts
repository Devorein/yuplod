import express from 'express';
import { createUser, getAllUsers, getUserById } from '../controllers';

const UsersRouter = express.Router();

UsersRouter.route('/').get(getAllUsers).post(createUser);
UsersRouter.route('/:id').get(getUserById);

export default UsersRouter;
