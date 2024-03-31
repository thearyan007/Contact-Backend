import express from "express";
import { current, login, signup } from "../controllers/users.controller.js";

const route = express();

route.post("/signup", signup);
route.post("/login", login);
route.post("/current", current);

export default route;
