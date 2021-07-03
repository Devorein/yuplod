import { Request, Response } from "express";
import { User } from "../models";

export async function getAllUsers(_: Request, res: Response){
  try{
    const users = await User.getAll();
    res.status(200).json({ data: users, status: 'success' });
  } catch(err){
    res.status(404).json({ message: [err.message], status: 'error' });
  }
}

export async function getUserById(req: Request, res: Response){
  try{
    const {id} = req.params;
    const users = await User.getById(id);
    res.status(200).json({ data: users, status: 'success' });
  } catch(err){
    res.status(404).json({ message: [err.message], status: 'error' });
  }
}