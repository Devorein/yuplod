import { IVote } from '../types';
import { pool } from '../utils';

export default class Vote {
  static async create(data: IVote, user_id: number, post_id: number) {
    const { rows: votes } = await pool.query<IVote>(
      'INSERT INTO votes (amount, user_id, post_id) VALUES($1, $2, $3)',
      [data.amount, user_id, post_id]
    );
    return votes;
  }
}
