import express from "express";
import {
  createContact,
  deleteContact,
  getAllContacts,
  getContact,
  updateContact,
} from "../controllers/contacts.controller.js";

const route = express();

route.get("/", getAllContacts);

route.get("/:id", getContact);

route.post("/", createContact);

route.put("/:id", updateContact);

route.delete("/:id", deleteContact);

export default route;
