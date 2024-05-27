import nodemailer from "nodemailer";
import "dotenv/config";

const {UKR_NET_PASSWORD, UKR_NET_FROM} = process.env;

const nodemailerConfig = {
    host: "smtp.ukr.net",
    port: 465, // 25, 465, 2525
    secure: true,
    auth: {
        user: UKR_NET_FROM,
        pass: UKR_NET_PASSWORD,
    }
};

const email = {
    from: UKR_NET_FROM,
    to: "bayoxeb736@fincainc.com",
    subject: "Test email",
    html: "<strong>Test email</strong>",
};

const transport = nodemailer.createTransport(nodemailerConfig);

transport.sendMail(email)
    .then(()=> console.log("Email send success"))
    .catch(error => console.log(error.message));