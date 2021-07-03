import { IPost, IPostCreate, IPostUpdate } from '../types';
import { pool } from '../utils';

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

  static async update(id: string, data: IPostUpdate) {
    const currentIsoTime = new Date().toISOString();
    const { rows: posts } = await pool.query<IPost>(
      `UPDATE posts SET caption = $1, image_url = $2, updated_at = $3 WHERE id = $4 RETURNING *`,
      [data.caption, data.image_url, currentIsoTime, id]
    );
    return posts[0];
  }

  static async create(data: IPostCreate) {
    const currentIsoTime = new Date().toISOString();
    const { rows: posts } = await pool.query<IPost>(
      `INSERT INTO posts (image_url, user_id, caption, created_at, updated_at) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [
        data.image_url,
        data.user_id,
        data.caption,
        currentIsoTime,
        currentIsoTime
      ]
    );
    return posts[0];
  }

  static async delete(id: string) {
    await pool.query<IPost>(`DELETE FROM posts where id = $1`, [id]);
  }
}
