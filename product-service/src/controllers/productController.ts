import { Request, Response } from "express";
import { prisma } from "../config/prisma";

export const createProduct = async (req: Request, res: Response) => {
  const { name, price } = req.body;

  const product = await prisma.product.create({
    data: {
      name,
      price,
    },
  });

  res.json(product);
};
