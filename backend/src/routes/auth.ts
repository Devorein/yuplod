import express from 'express';
import { register } from '../controllers';

const AuthRouter = express.Router();

AuthRouter.route('/register').post(register);

export default AuthRouter;
