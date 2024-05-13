import jwt from "jsonwebtoken";

const {JWT_SECRET} = process.env;

export const createToken = payload => jwt.sign(payload, JWT_SECRET, {expiresIn: "23h"});