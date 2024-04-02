import express from "express";
import dotenv from "dotenv";
import connectToMongoDB from "./db/ConnectedToMongoDB.js";
const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Backend on");
});

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on ${PORT}`);
});
