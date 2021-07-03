import { IUser } from "../types";
import { pool } from "../utils";

export default class User {
  static async getAll(){
    const {rows: users} = await pool.query<IUser>("SELECT * from users");
    return users;
  }

  static async getById(id: string){
    const {rows: users} = await pool.query<IUser>(`SELECT * from users where id = $1`, [id]);
    return users;
  }
}