import express from "express";
import dotenv from "dotenv";

dotenv.config();
const port = process.env.PORT || 5000;

const app = express();

app.get("/api/contacts", (req, res) => {
  res.status(200).json({ message: "all contacts fetched!!" });
});

app.listen(port, () => {
  console.log(`server is running in the port ${port}`);
});
