import { IVote } from '../types';
import { pool } from '../utils';

export default class Vote {
  /**
   * Creates a vote using id of the voter and passed data
   * @param data Vote create data
   * @param user_id id of the voter
   * @returns The created vote
   */
  static async create(
    data: { post_id: number; amount: number },
    user_id: number
  ) {
    let { amount, post_id } = data;
    amount = amount < 0 ? -1 : 1;
    const { rows: votes } = await pool.query<IVote>(
      'INSERT INTO votes (amount, user_id, post_id) VALUES($1, $2, $3) RETURNING *',
      [amount, user_id, post_id]
    );
    return votes[0];
  }

  /**
   * Updates a vote using its voter id and returns the updated vote data
   * @param data Post update data
   * @param user_id id of the voter
   * @returns Updated vote data
   */
  static async update(
    data: { amount: number; post_id: number },
    user_id: number
  ) {
    data.amount = data.amount < 0 ? -1 : 1;
    const { amount, post_id } = data;
    const { rows: votes } = await pool.query<IVote>(
      'UPDATE votes SET amount = $1 WHERE post_id = $2 AND user_id = $3 RETURNING *;',
      [amount, post_id, user_id]
    );
    return votes[0];
  }

  /**
   * Deletes a vote using the voter id and the post id and returns the number of deleted items
   * @param post_id Post where the vote was added
   * @param user_id Id of the voter
   * @returns Number of records deleted
   */
  static async delete(post_id: number, user_id: number) {
    const { rows: votes } = await pool.query<IVote>(
      'DELETE from votes where post_id = $1 AND user_id = $2 RETURNING *',
      [post_id, user_id]
    );
    return {
      deleted: votes.length
    };
  }
}
