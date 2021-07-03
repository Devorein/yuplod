import express from "express";
import { getAllUsers, getUserById } from "../controllers";

const UsersRouter = express.Router();

UsersRouter.route("/").get(getAllUsers);
UsersRouter.route("/:id").get(getUserById);

export default UsersRouter;