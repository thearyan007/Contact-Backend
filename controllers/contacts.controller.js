import asyncHandler from "express-async-handler";
import Contact from "../models/contact.model.js";

export const getAllContacts = asyncHandler(async (req, res) => {
  const contact = await Contact.find({
    user_id: req.user._id,
  });
  res.status(200).json(contact);
});

export const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact Not found!!");
  }
  res.status(200).json(contact);
});

export const createContact = asyncHandler(async (req, res) => {
  // console.log("body:", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All contact details needs to be filled");
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
    user_id: req.user._id,
  });

  res.status(200).json(contact);
});

export const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found!");
  }

  if (!req.user || !req.user._id) {
    res.status(403);
    throw new Error("Unauthorized: User information missing!");
  }

  if (contact.user_id.toString() !== req.user._id.toString()) {
    res.status(403);
    throw new Error("User does not have the permission to update!");
  }

  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedContact);
});

export const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found!");
  }
  if (contact.user_id.toString() !== req.user._id) {
    res.status(403);
    throw new Error("User does not have the permission to update!");
  }

  await Contact.findByIdAndDelete(req.params.id);

  res.status(200).json(contact);
});
