import jwt from "jsonwebtoken";
import "dotenv/config";

const {JWT_SECRET} = process.env;

const payload = {
    id: "6642531576be1f669815c566"
};

const token = jwt.sign(payload, JWT_SECRET, {expiresIn: "23h"});
// console.log(token);
const decodeToken = jwt.decode(token);
// console.log(decodeToken);

try {
    const {id} = jwt.verify(token, JWT_SECRET);
    console.log(id);
    const invalidToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NDI1MzE1NzZiZTFmNjY5ODE1YzU2NiIsImlhdCI6MTcxNTYyMzcxMiwiZXhwIjoxNzE1NzA2NTEyfQ.hjLPGVB4ilCGndl6SjrOURCbELcW-_7Fg6hUUMhZmfm";
    jwt.verify(invalidToken, JWT_SECRET);
}
catch(error) {
    console.log(error.message);
}