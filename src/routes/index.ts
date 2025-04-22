import express = require("express");
import { usersRoutes } from "./users.route";

export const routes = (app: express.Express) =>{
    app.use(express.json())
    app.use(usersRoutes);

}