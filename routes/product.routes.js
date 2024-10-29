import { Router } from "express";
import { createProductController, deleteByIdProductController, getByIdProductController, putByIdProductController } from "../controllers/index.js";

export const productRoutes = new Router();

productRoutes.post("/", createProductController);
productRoutes.get("/:id", getByIdProductController);
productRoutes.put("/:id", putByIdProductController);
productRoutes.delete("/:id", deleteByIdProductController);
