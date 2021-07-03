import express from 'express';
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById
} from '../controllers';
import { auth } from '../middlewares';

const UsersRouter = express.Router();

UsersRouter.route('/')
  .get(getAllUsers)
  .post(createUser)
  .delete(auth, deleteUser);
UsersRouter.route('/:id').get(getUserById);

export default UsersRouter;
