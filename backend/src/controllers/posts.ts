import { Request, Response } from "express";
import { Post } from "../models";

export async function getAllPosts(_: Request, res: Response){
  try{
    const posts = await Post.getAll();
    res.status(200).json({ data: posts, status: 'success' });
  } catch(err){
    res.status(404).json({ message: [err.message], status: 'error' });
  }
}

export async function getPostById(req: Request, res: Response){
  try{
    const {id} = req.params;
    const posts = await Post.getById(id);
    res.status(200).json({ data: posts, status: 'success' });
  } catch(err){
    res.status(404).json({ message: [err.message], status: 'error' });
  }
}