import express from 'express';
import { createVote, deleteVote, updateVote } from '../controllers';
import { auth } from '../middlewares';

const VotesRouter = express.Router();

VotesRouter.route('/')
  .post(auth(), createVote)
  .delete(auth(), deleteVote)
  .put(auth(), updateVote);

export default VotesRouter;
