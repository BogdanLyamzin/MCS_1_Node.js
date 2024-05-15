import Joi from "joi";

import { emailRegexp } from "../constants/user-constants.js";

export const authSignupSchema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().pattern(emailRegexp).required(),
    password: Joi.string().min(6).required(),
})

export const authSigninSchema = Joi.object({
    email: Joi.string().pattern(emailRegexp).required(),
    password: Joi.string().min(6).required(),
})