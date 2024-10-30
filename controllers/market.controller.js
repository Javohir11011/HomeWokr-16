import { query } from "express";
import { createMarketService, deleteMarketService, findMarketService, getSearchMarketService, updateMarketService  } from "../service/index.js";

export const createMarketController = async (req, res, next) => {
  try {
    const result = await createMarketService(req.body);
    if (result.error) {
      return res.status(409).send(result.message);
    }

    res.send(result);
  } catch (error) {
    next(error);
  }
};

export const getSearchMarketController = async (req, res, next) => {
  try {
    let {q} = req.query
    const result = await getSearchMarketService();
    console.log(result);
    const searchedWeather = result.filter((item) => item.name.toUpperCase().includes(q.toUpperCase()));


    res.send(result)
    if (result.error) {
      return res.status(409).send(result.message);
    }

    res.send(searchedWeather);
  } catch (error) {
    next(error);
  }
};
export const getByIdMarketController = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id)
    const result = await findMarketService(id);

    if (result.error) {
      return res.status(409).send(result.message);
    }

    res.send(result);
  } catch (error) {
    next(error);
  }
};


export const putByIdMarketController = async (req, res, next) => {
  try {
    const body = req.body
    const id = parseInt(req.params.id)
    const result = await updateMarketService(body, id);

    if (result.error) {
      return res.status(409).send(result.message);
    }

    res.send(result);
  } catch (error) {
    next(error);
  }
};


export const deleteByIdMarketController = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id)
    const result = await deleteMarketService(id);

    if (result.error) {
      return res.status(409).send(result.message);
    }

    res.send(result);
  } catch (error) {
    next(error);
  }
};
