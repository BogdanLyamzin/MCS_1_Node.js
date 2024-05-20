import express from "express";

import authControllers from "../controllers/authControllers.js";

import isEmptyBody from "../middlewares/isEmptyBody.js";
import authenticate from "../middlewares/authenticate.js";

import validateBody from "../decorators/validateBody.js";

import {authSignupSchema, authSigninSchema} from "../schemas/authSchemas.js";

const authRouter = express.Router();

authRouter.post("/signup", isEmptyBody, validateBody(authSignupSchema), authControllers.signup);

authRouter.post("/signin", isEmptyBody, validateBody(authSigninSchema), authControllers.signin);

authRouter.get("/current", authenticate, authControllers.getCurrent);

authRouter.post("/signout", authenticate, authControllers.signout);

export default authRouter;