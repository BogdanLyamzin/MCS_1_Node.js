import mongoose from "mongoose";
import request from "supertest";

import app from "../app.js";

import { findUser, deleteAllUsers } from "../services/authServices.js";

const {DB_TEST_HOST, PORT = 3000} = process.env;

describe("test /api/auth/signup", ()=> {
    let server = null;
    beforeAll(async ()=> {
        await mongoose.connect(DB_TEST_HOST);
        server = app.listen(PORT);
    })

    afterAll(async()=> {
        await mongoose.connection.close();
        server.close()
    })

    afterEach(async()=> {
        await deleteAllUsers();
    })

    test("test singup with correct data", async()=> {
        const signupData = {
            username: "Bogdan",
            email: "bogdan@gmail.com",
            password: "123456"
        };

        const {statusCode, body} = await request(app).post("/api/auth/signup").send(signupData);

        expect(statusCode).toBe(201);
        expect(body.username).toBe(signupData.username);
        expect(body.email).toBe(signupData.email);

        const user = await findUser({email: signupData.email});
        expect(user).not.toBeNull();
        expect(user.username).toBe(signupData.username);
        expect(user.email).toBe(signupData.email);
    })
})