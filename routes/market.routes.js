import { Router } from "express";
import { createMarketController, deleteByIdMarketController, getByIdMarketController, getSearchMarketController, putByIdMarketController } from "../controllers/index.js";


export const marketRoutes = new Router();

marketRoutes.post("/", createMarketController);
marketRoutes.get("/:id", getByIdMarketController);
marketRoutes.get("/search", getSearchMarketController);
marketRoutes.put("/:id", putByIdMarketController);
marketRoutes.delete("/:id", deleteByIdMarketController);
