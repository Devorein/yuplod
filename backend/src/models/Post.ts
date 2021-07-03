import { IPost, IPostCreate, IPostUpdate } from '../types';
import { generateDynamicUpdateQuery, pool } from '../utils';

export default class Post {
  static async getAll() {
    const { rows: posts } = await pool.query<IPost>('SELECT * FROM posts');
    return posts;
  }

  static async getById(id: string) {
    const { rows: posts } = await pool.query<IPost>(
      `SELECT * FROM posts WHERE id = $1`,
      [id]
    );
    return posts;
  }

  static async update(id: string, data: IPostUpdate, user_id: number) {
    const currentIsoTime = new Date().toISOString();
    const [updateQuery, params] = generateDynamicUpdateQuery(data, [
      'caption',
      'image_url'
    ]);
    const lastIndex = params.length;
    params.push(currentIsoTime, id, user_id);
    const { rows: posts } = await pool.query<IPost>(
      `UPDATE posts SET ${updateQuery} updated_at = $${
        lastIndex + 1
      } WHERE id = $${lastIndex + 2} AND user_id = $${
        lastIndex + 3
      } RETURNING *`,
      params
    );
    return posts[0];
  }

  static async create(data: IPostCreate, user_id: number) {
    const currentIsoTime = new Date().toISOString();
    const { rows: posts } = await pool.query<IPost>(
      `INSERT INTO posts (image_url, caption, user_id, created_at, updated_at) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [data.image_url, data.caption, user_id, currentIsoTime, currentIsoTime]
    );
    return posts[0];
  }

  static async delete(id: string, user_id: number) {
    const { rows: posts } = await pool.query<IPost>(
      `DELETE FROM posts where id = $1 AND user_id = $2 RETURNING *`,
      [id, user_id]
    );
    return posts[0];
  }
}
