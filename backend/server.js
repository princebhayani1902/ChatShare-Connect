import express from "express";
import dotenv from "dotenv";

import connectToMongoDB from "./db/ConnectedToMongoDB.js";
import authRouter from "./routes/auth.routes.js";

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());

app.use("/api/auth",authRouter);

app.get("/", (req, res) => {
  res.send("Backend on");
});

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on ${PORT}`);
});
