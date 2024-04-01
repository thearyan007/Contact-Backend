import express from "express";
import { current, login, signup } from "../controllers/users.controller.js";
import { validateToken } from "../middleare/validateTokenHandler.js";

const route = express();

route.post("/signup", signup);
route.post("/login", login);
route.get("/current", validateToken, current);

export default route;
