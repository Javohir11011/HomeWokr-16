import { Router } from "express";
import { createMarketController, deleteByIdMarketController, getByIdMarketController, putByIdMarketController } from "../controllers/index.js";


export const marketRoutes = new Router();

marketRoutes.post("/", createMarketController);
marketRoutes.get("/:id", getByIdMarketController);
marketRoutes.put("/:id", putByIdMarketController);
marketRoutes.delete("/:id", deleteByIdMarketController);
