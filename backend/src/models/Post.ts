import { IPost } from "../types";
import { pool } from "../utils";

export default class Post {
  static async getAll(){
    const {rows: posts} = await pool.query<IPost>("SELECT * from posts");
    return posts;
  }

  static async getById(id: string){
    const {rows: posts} = await pool.query<IPost>(`SELECT * from posts where id = $1`, [id]);
    return posts;
  }
}