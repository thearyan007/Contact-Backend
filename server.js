import express from "express";
import dotenv from "dotenv";
import allcontacts from "./routes/contacts.route.js";

dotenv.config();
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use("/", allcontacts); //middleware

app.listen(port, () => {
  console.log(`server is running in the port ${port}`);
});
