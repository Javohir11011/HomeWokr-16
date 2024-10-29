import { createCategoryService, deleteCategoryService, findCategoryService, updateCategoryService } from "../service/index.js";

export const createCategoryController = async (req, res, next) => {
  try {
    const result = await createCategoryService(req.body);

    if (result.error) {
      return res.status(409).send(result.message);
    }
    res.send(result);
  } catch (error) {
    next(error);
  }
};


export const getByIdCategoryController = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id)
    const result = await findCategoryService(id);

    if (result.error) {
      return res.status(409).send(result.message);
    }
    res.send(result);
  } catch (error) {
    next(error);
  }
};

export const putByIdCategoryController = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id)
    const body = req.body
    const result = await updateCategoryService(body, id);

    if (result.error) {
      return res.status(409).send(result.message);
    }
    res.send(result);
  } catch (error) {
    next(error);
  }
};

export const deleteByIdCategoryController = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id)
    const result = await deleteCategoryService(id);

    if (result.error) {
      return res.status(409).send(result.message);
    }
    res.send(result);
  } catch (error) {
    next(error);
  }
};

