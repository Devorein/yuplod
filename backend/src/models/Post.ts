import { IPost, IPostUpdate } from '../types';
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

  static async update(data: IPostUpdate) {
    const { rows: posts } = await pool.query<IPost>(
      `UPDATE posts SET caption = $1, image_url = $2 WHERE id = $3 RETURNING *`,
      [data.caption, data.image_url, data.id]
    );
    return posts[0];
  }

  static async delete(id: number) {
    await pool.query<IPost>(`DELETE FROM posts where id = $1`, [id]);
  }
}
