import express from "express";

import moviesControllers from "../controllers/moviesControllers.js";

import isEmptyBody from "../middlewares/isEmptyBody.js";

const moviesRouter = express.Router();

moviesRouter.get("/", moviesControllers.getAll);

moviesRouter.get("/:id", moviesControllers.getById);

moviesRouter.post("/", isEmptyBody, moviesControllers.add);

moviesRouter.put("/:id", isEmptyBody, moviesControllers.updateById);

moviesRouter.delete("/:id", moviesControllers.deleteById);

export default moviesRouter;