import { Router } from "express";
import { createProduct } from "../controllers/productController";

const router = Router();
router.post("/create", createProduct);

export default router;
