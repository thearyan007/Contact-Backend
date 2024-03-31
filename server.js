import express from "express";
import dotenv from "dotenv";
import allcontacts from "./routes/contacts.route.js";
import users from "./routes/users.route.js";
import { errorHandler } from "./middleare/errorHandlers.js";
import connectToDatabase from "./db/connectToDatabase.js";

dotenv.config();
const port = process.env.PORT || 5001;

const app = express();

app.use(express.json());
app.use("/api/contacts", allcontacts);
app.use("/api/users", users);
app.use(errorHandler);

app.listen(port, () => {
  connectToDatabase();
  console.log(`server is running in the port ${port}`);
});
