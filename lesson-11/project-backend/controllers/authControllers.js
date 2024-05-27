import { nanoid } from "nanoid";

import * as authServices from "../services/authServices.js";

import ctrlWrapper from "../decorators/ctrlWrapper.js";

import HttpError from "../helpers/HttpError.js";
import compareHash from "../helpers/compareHash.js";
import { createToken } from "../helpers/jwt.js";
import sendEmail from "../helpers/sendEmail.js";

const signup = async(req, res)=> {
    const {email} = req.body;
    const user = await authServices.findUser({email});
    if(user) {
        throw HttpError(409, "Email already use");
    }

    const verificationCode = nanoid();

    const newUser = await authServices.saveUser({...req.body, verificationCode});

    const verifyEmail = {
        to: email,
        subject: "Verify email",
        html: `<a target="_blank" href="http://localhost:3000/api/auth/verify/${verificationCode}">Click verify email</a>`,
    };

    await sendEmail(verifyEmail);

    res.status(201).json({
        username: newUser.username,
        email: newUser.email,
    })
}

const verify = async(req, res)=> {
    const {verificationCode} = req.params;
    const user = await authServices.findUser({verificationCode});
    if(!user) {
        throw HttpError(404, "Email not found or email already verified");
    }

    await authServices.updateUser({_id: user._id}, {verify: true, verificationCode: ""});

    res.json({
        message: "Email verified"
    })
}

const resendVerify = async(req, res)=> {
    const {email} = req.body;
    const user = await authServices.findUser({email});
    if(!user) {
        throw HttpError(404, "Email not found");
    }
    if(user.verify) {
        throw HttpError(400, "Email already verify");
    }

    const verifyEmail = {
        to: email,
        subject: "Verify email",
        html: `<a target="_blank" href="http://localhost:3000/api/auth/verify/${user.verificationCode}">Click verify email</a>`,
    };

    await sendEmail(verifyEmail);

    res.json({
        message: "Verify email resend"
    })
}

const signin = async(req, res)=> {
    const {email, password} = req.body;
    const user = await authServices.findUser({email});
    if(!user) {
        throw HttpError(401, "Email or password invalid");
    }

    if(!user.verify) {
        throw HttpError(401, "Email not verify");
    }

    const comparePassword = await compareHash(password, user.password);
    if(!comparePassword) {
        throw HttpError(401, "Email or password invalid");
    }

    const {_id: id} = user;
    const payload = {
        id,
    };

    const token = createToken(payload);
    await authServices.updateUser({_id: id}, {token});

    res.json({
        token,
    })
}

const getCurrent = async (req, res)=> {
    const {username, email} = req.user;

    res.json({
        username,
        email,
    })
}

const signout = async(req, res)=> {
    const {_id} = req.user;
    await authServices.updateUser({_id}, {token: ""});
    
    res.json({
        message: "Signout success"
    })
}

export default {
    signup: ctrlWrapper(signup),
    verify: ctrlWrapper(verify),
    resendVerify: ctrlWrapper(resendVerify),
    signin: ctrlWrapper(signin),
    getCurrent: ctrlWrapper(getCurrent),
    signout: ctrlWrapper(signout),
}