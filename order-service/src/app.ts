import express from "express";
import dotenv from "dotenv";
import orderRoutes from "./routes/orderRoutes";

dotenv.config();
const app = express();
app.use(express.json());

app.use("/order", orderRoutes);

app.listen(3002, () => {
  console.log("Order Service running on port 3002");
});
