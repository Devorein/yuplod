import express from "express";
import { IPost } from "../types";
import { pool } from "../utils";

const PostsRouter = express.Router();

PostsRouter.route("/").get(async (_, res)=>{
  const {rows} = await pool.query<IPost>("SELECT * from posts");
  res.status(200).json({ data: rows, status: 'success' });
});

export default PostsRouter;