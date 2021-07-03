import express from 'express';
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById
} from '../controllers';

const UsersRouter = express.Router();

UsersRouter.route('/').get(getAllUsers).post(createUser);
UsersRouter.route('/:id').get(getUserById).delete(deleteUser);

export default UsersRouter;
