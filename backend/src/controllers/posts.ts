import { Request, Response } from "express";
import { IPost } from "../types";
import { pool } from "../utils";

export async function getAllPosts(_: Request, res: Response){
  try{
    const {rows: posts} = await pool.query<IPost>("SELECT * from posts");
    res.status(200).json({ data: posts, status: 'success' });
  } catch(err){
    res.status(404).json({ message: [err.message], status: 'success' });
  }
}

export async function getPostById(req: Request, res: Response){
  try{
    const id = req.params.id;
    const {rows: posts} = await pool.query<IPost>(`SELECT * from posts where id = $1`, [id]);
    res.status(200).json({ data: posts, status: 'success' });
  } catch(err){
    res.status(404).json({ message: [err.message], status: 'success' });
  }
}