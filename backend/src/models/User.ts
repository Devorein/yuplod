import argon2 from 'argon2';
import { IUser, IUserCreate } from '../types';
import { pool } from '../utils';

const fieldsWithoutPassword =
  'id, username, email, first_name, last_name, created_at, updated_at';
export default class User {
  /**
   * Get all the users
   * @returns All the users from the database
   */
  static async getAll() {
    const { rows: users } = await pool.query<IUser>('SELECT * FROM users');
    return users;
  }

  /**
   * Returns a single user along with its password from the database using its id
   * @param id Id of the user
   * @returns A single user
   */

  static async getByIdWithPassword(id: number) {
    const { rows: users } = await pool.query<IUser>(
      `SELECT * FROM users WHERE id = $1`,
      [id]
    );
    return users;
  }

  /**
   * Returns a single user without its password from the database using its id
   * @param id Id of the user
   * @returns A single user
   */
  static async getById(id: number) {
    const { rows: users } = await pool.query<IUser>(
      `SELECT ${fieldsWithoutPassword} FROM users WHERE id = $1`,
      [id]
    );
    return users;
  }

  /**
   * Returns a single user with its email from the database using its email
   * @param email email of the user
   * @returns A single user
   */
  static async getByEmailWithPassword(email: string) {
    const { rows: users } = await pool.query<IUser>(
      `SELECT * FROM users WHERE email = $1`,
      [email]
    );
    return users;
  }

  /**
   * Returns a single user with its username from the database using its username
   * @param username username of the user
   * @returns A single user
   */
  static async getByUsernameWithPassword(username: string) {
    const { rows: users } = await pool.query<IUser>(
      `SELECT * FROM users WHERE username = $1`,
      [username]
    );
    return users;
  }

  /**
   * Returns a single user without its password from the database using its email or username
   * @param email Id of the email
   * @param username Id of the username
   * @returns A single user
   */
  static async getByUsernameOrEmail(email: string, username: string) {
    const { rows: users } = await pool.query<IUser>(
      `SELECT ${fieldsWithoutPassword} FROM users WHERE username = $1 or email = $2`,
      [username, email]
    );
    return users;
  }

  /**
   * creates and returns the user without its password
   * @param data User create data
   * @returns Created user
   */
  static async create(data: IUserCreate) {
    const currentIsoTime = new Date().toISOString();
    const hashedPassword = await argon2.hash(data.password);
    const { rows: users } = await pool.query<IUser>(
      `INSERT INTO users (first_name, last_name, email, password, username, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING ${fieldsWithoutPassword}`,
      [
        data.first_name,
        data.last_name,
        data.email,
        hashedPassword,
        data.username,
        currentIsoTime,
        currentIsoTime
      ]
    );
    return users[0];
  }

  /**
   * Deletes the user from the db using its id
   * @param id Id of the user
   */
  static async delete(id: number) {
    await pool.query(`DELETE FROM users where id = $1`, [id]);
  }
}
