import express from "express";

import authControllers from "../controllers/authControllers.js";

import isEmptyBody from "../middlewares/isEmptyBody.js";

import validateBody from "../decorators/validateBody.js";

import {authSignupSchema, authSigninSchema} from "../schemas/authSchemas.js";

const authRouter = express.Router();

authRouter.post("/signup", isEmptyBody, validateBody(authSignupSchema), authControllers.signup);

authRouter.post("/signin", isEmptyBody, validateBody(authSigninSchema), authControllers.signin);

export default authRouter;