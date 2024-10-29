import { createProductService, findProduct ,deleteProduct, updateProduct} from "../service/index.js";

export const createProductController = async (req, res, next) => {
  try {

    const result = await createProductService(req.body);

    if (result.error) {
      return res.status(409).send(result.message);
    }
    res.send(result);
  } catch (error) {
    next(error);
  }
};

export const getByIdProductController = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id)
    const result = await findProduct(id);
    if (result.error) {
      return res.status(409).send(result.message);
    }
    res.send(result);
  } catch (error) {
    next(error);
  }
};

export const putByIdProductController = async (req, res, next) => {
  try {
    const body = req.body
    const id = parseInt(req.params.id)
    const result = await updateProduct(body, id);
    if (result.error) {
      return res.status(409).send(result.message);
    }
    res.send(result);
  } catch (error) {
    next(error);
  }
};




export const deleteByIdProductController = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id)
    const result = await deleteProduct(id);
    if (result.error) {
      return res.status(409).send(result.message);
    }
    res.send(result);
  } catch (error) {
    next(error);
  }
};
