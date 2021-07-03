import express from 'express';
import { login, register } from '../controllers';

const AuthRouter = express.Router();

AuthRouter.route('/register').post(register);
AuthRouter.route('/login').post(login);

export default AuthRouter;
