import { Request, Response } from "express";
import { User } from "../models";
import { IUser } from "../types";
import { pool } from "../utils";

export async function getAllUsers(_: Request, res: Response){
  try{
    const users = await User.getAll();
    res.status(200).json({ data: users, status: 'success' });
  } catch(err){
    res.status(404).json({ message: [err.message], status: 'success' });
  }
}

export async function getUserById(req: Request, res: Response){
  try{
    const id = req.params.id;
    const {rows: users} = await pool.query<IUser>(`SELECT * from users where id = $1`, [id]);
    res.status(200).json({ data: users, status: 'success' });
  } catch(err){
    res.status(404).json({ message: [err.message], status: 'success' });
  }
}