import { IUser } from '../types';
import { pool } from '../utils';

export default class User {
  static async getAll() {
    const { rows: users } = await pool.query<IUser>('SELECT * FROM users');
    return users;
  }

  static async getById(id: string) {
    const { rows: users } = await pool.query<IUser>(
      `SELECT * FROM users WHERE id = $1`,
      [id]
    );
    return users;
  }

  static async getByEmail(email: string) {
    const { rows: users } = await pool.query<IUser>(
      `SELECT * FROM users WHERE email = $1`,
      [email]
    );
    return users;
  }

  static async getByUsername(username: string) {
    const { rows: users } = await pool.query<IUser>(
      `SELECT * FROM users WHERE username = $1`,
      [username]
    );
    return users;
  }

  static async getByUsernameOrEmail(email: string, username: string) {
    const { rows: users } = await pool.query<IUser>(
      `SELECT * FROM users WHERE username = $1 or email = $2`,
      [username, email]
    );
    return users;
  }
}
