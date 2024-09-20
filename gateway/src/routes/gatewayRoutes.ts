import { Router } from "express";
import { userServiceProxy, orderServiceProxy, productServiceProxy } from "../middleware/proxy";

const router = Router();

router.use("/user", userServiceProxy);
router.use("/order", orderServiceProxy);
router.use("/product", productServiceProxy);

export default router;
