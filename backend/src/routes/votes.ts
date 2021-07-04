import express from 'express';
import { createVote } from '../controllers';
import { auth } from '../middlewares';

const VotesRouter = express.Router();

VotesRouter.route('/').post(auth, createVote);

export default VotesRouter;
