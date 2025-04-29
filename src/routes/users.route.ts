import express = require("express");
import { UsersControllers } from "../controllers/users.controller";
import { auth, validateUser } from "../middleware/validade"; 
import { UserSchema } from "../service/user.service";

export const usersRoutes = express.Router()

usersRoutes.get("/users", UsersControllers.getAll);
usersRoutes.get("/users/:id", UsersControllers.getId);
usersRoutes.post("/user", validateUser(UserSchema), UsersControllers.PostUser);
usersRoutes.delete("/users/:id",auth, UsersControllers.DeleteUser);
usersRoutes.post("/login", UsersControllers.Login)
usersRoutes.put("/users/:id",auth,  UsersControllers.ModifyUser);

