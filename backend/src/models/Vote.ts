import { IVote } from '../types';
import { pool } from '../utils';

export default class Vote {
  static async create(
    data: { post_id: number; amount: number },
    user_id: number
  ) {
    let { amount, post_id } = data;
    amount = amount < 0 ? -1 : 1;
    const { rows: votes } = await pool.query<IVote>(
      'INSERT INTO votes (amount, user_id, post_id) VALUES($1, $2, $3)',
      [amount, user_id, post_id]
    );
    return votes;
  }

  static async delete(post_id: number, user_id: number) {
    const { rows: votes } = await pool.query<IVote>(
      'DELETE from votes where post_id = $1 AND user_id = $2',
      [user_id, post_id]
    );
    return votes;
  }
}
