import express from "express";
import { getAllPosts, getPostById } from "../controllers";

const PostsRouter = express.Router();

PostsRouter.route("/").get(getAllPosts);
PostsRouter.route("/:id").get(getPostById);

export default PostsRouter;