import express from "express";

import moviesControllers from "../controllers/moviesControllers.js";

import isEmptyBody from "../middlewares/isEmptyBody.js";
import isValidId from "../middlewares/isValidId.js";
import authenticate from "../middlewares/authenticate.js";

import validateBody from "../decorators/validateBody.js";

import { movieAddSchema, movieUpdateSchema } from "../schemas/moviesSchemas.js";

const moviesRouter = express.Router();

moviesRouter.use(authenticate);

moviesRouter.get("/", moviesControllers.getAll);

moviesRouter.get("/:id", isValidId, moviesControllers.getById);

moviesRouter.post("/", isEmptyBody, validateBody(movieAddSchema), moviesControllers.add);

moviesRouter.put("/:id", isValidId, isEmptyBody, validateBody(movieUpdateSchema), moviesControllers.updateById);

moviesRouter.delete("/:id", isValidId, moviesControllers.deleteById);

export default moviesRouter;