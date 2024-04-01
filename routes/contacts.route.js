import express from "express";
import {
  createContact,
  deleteContact,
  getAllContacts,
  getContact,
  updateContact,
} from "../controllers/contacts.controller.js";
import { validateToken } from "../middleare/validateTokenHandler.js";

const route = express();

route.use(validateToken);

route.get("/", getAllContacts);

route.get("/:id", getContact);

route.post("/", createContact);

route.put("/:id", updateContact);

route.delete("/:id", deleteContact);

export default route;
