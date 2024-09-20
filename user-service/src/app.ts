import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes";

dotenv.config();
const app = express();
app.use(express.json());

app.use("/auth", authRoutes);

app.listen(3001, () => {
  console.log("User Service running on port 3001");
});
