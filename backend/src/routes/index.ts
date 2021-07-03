import express from "express";
import PostsRouter from "./posts";
import UsersRouter from "./users";

const router = express.Router();

router.use("/posts", PostsRouter);
router.use("/users", UsersRouter);

export default router;