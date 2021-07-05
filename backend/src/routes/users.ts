import express from 'express';
import {
  deleteUser,
  getAllUsers,
  getCurrentUser,
  getUserById
} from '../controllers';
import { auth } from '../middlewares';

const UsersRouter = express.Router();

UsersRouter.route('/').get(getAllUsers).delete(auth(), deleteUser);
UsersRouter.route('/me').get(auth(), getCurrentUser);
UsersRouter.route('/:id').get(getUserById);

export default UsersRouter;
