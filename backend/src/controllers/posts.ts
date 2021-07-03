import { Response } from "express";
import { IPost } from "../types";
import { pool } from "../utils";

export async function getAllPosts(_: any, res: Response){
  try{
    const {rows} = await pool.query<IPost>("SELECT * from posts");
    res.status(200).json({ data: rows, status: 'success' });
  } catch(err){
    res.status(404).json({ message: err.message, status: 'success' });
  }
}