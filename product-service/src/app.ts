import express from "express";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes";

dotenv.config();
const app = express();
app.use(express.json());

app.use("/product", productRoutes);

app.listen(3003, () => {
  console.log("Product Service running on port 3003");
});
