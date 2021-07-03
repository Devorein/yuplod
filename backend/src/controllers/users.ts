import { Request, Response } from "express";
import { pool } from "../utils";

export async function getAllUsers(_: Request, res: Response){
  try{
    const {rows: users} = await pool.query("SELECT * from users");
    res.status(200).json({ data: users, status: 'success' });
  } catch(err){
    res.status(404).json({ message: err.message, status: 'success' });
  }
}