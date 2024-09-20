import { Request, Response } from "express";
import { prisma } from "../config/prisma";

export const createOrder = async (req: Request, res: Response) => {
  const { productId, userId, quantity } = req.body;

  const order = await prisma.order.create({
    data: {
      productId,
      userId,
      quantity,
    },
  });

  res.json(order);
};
