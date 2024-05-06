import express from "express";

import moviesControllers from "../controllers/moviesControllers.js";

import isEmptyBody from "../middlewares/isEmptyBody.js";

import validateBody from "../decorators/validateBody.js";

import { movieAddSchema, movieUpdateSchema } from "../schemas/moviesSchemas.js";

const moviesRouter = express.Router();

moviesRouter.get("/", moviesControllers.getAll);

moviesRouter.get("/:id", moviesControllers.getById);

moviesRouter.post("/", isEmptyBody, validateBody(movieAddSchema), moviesControllers.add);

moviesRouter.put("/:id", isEmptyBody, validateBody(movieUpdateSchema), moviesControllers.updateById);

moviesRouter.delete("/:id", moviesControllers.deleteById);

export default moviesRouter;