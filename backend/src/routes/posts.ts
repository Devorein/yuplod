import express from "express";
import { getAllPosts } from "../controllers";

const PostsRouter = express.Router();

PostsRouter.route("/").get(getAllPosts);

export default PostsRouter;