import express from "express";
import {
  createContact,
  deleteContact,
  getAllContacts,
  getContact,
  updateContact,
} from "../controllers/contacts.controller.js";

const route = express();

route.get("/api/contacts", getAllContacts);

route.get("/api/contacts/:id", getContact);

route.post("/api/contacts", createContact);

route.put("/api/contacts/:id", updateContact);

route.delete("/api/contacts/:id", deleteContact);

export default route;
