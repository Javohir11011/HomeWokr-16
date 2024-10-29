import { Router } from "express";
import { createCategoryController, deleteByIdCategoryController, getByIdCategoryController, putByIdCategoryController } from "../controllers/index.js";


export const categoryRoutes = new Router();

categoryRoutes.post("/", createCategoryController);
categoryRoutes.get("/:id", getByIdCategoryController);
categoryRoutes.put("/:id", putByIdCategoryController);
categoryRoutes.delete("/:id", deleteByIdCategoryController);