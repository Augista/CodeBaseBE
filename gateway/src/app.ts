import express from "express";
import dotenv from "dotenv";
import gatewayRoutes from "./routes/gatewayRoutes";

dotenv.config();
const app = express();

app.use("/", gatewayRoutes);

app.listen(3000, () => {
  console.log("API Gateway running on port 3000");
});
