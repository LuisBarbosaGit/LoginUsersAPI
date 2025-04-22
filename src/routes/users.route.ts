import express = require("express");
import { UsersControllers } from "../controllers/users.controller";

export const usersRoutes = express.Router()

usersRoutes.get("/users", UsersControllers.getAll);
usersRoutes.get("/users/:id", UsersControllers.getId);
usersRoutes.post("/user", UsersControllers.PostUser);
usersRoutes.delete("/users/:id", UsersControllers.DeleteUser);
usersRoutes.put("/users/:id", UsersControllers.ModifyUser);

