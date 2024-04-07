import express from "express";
import dotenv from "dotenv";

import connectToMongoDB from "./db/ConnectedToMongoDB.js";
import authRouter from "./routes/auth.routes.js";

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());

app.use("/api/auth",authRouter);

app.use((err,req,res,next)=>{
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal server error';
  return res.status(statusCode).json({
      success:false,
      statusCode,
      message
  })
});

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on ${PORT}`);
});
