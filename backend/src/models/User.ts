import { IUser, IUserCreate } from '../types';
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

  static async create(data: IUserCreate) {
    const currentIsoTime = new Date().toISOString();
    const { rows: users } = await pool.query<IUser>(
      `INSERT INTO users (first_name, last_name, email, password, username, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [
        data.first_name,
        data.last_name,
        data.email,
        data.password,
        data.username,
        currentIsoTime,
        currentIsoTime
      ]
    );
    return users[0];
  }
}
