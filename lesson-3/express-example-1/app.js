import express from "express";

const app = express(); // app - web-server

app.get("/", (request, response)=> {
    response.send("<h1>Main page</h1>");
})

app.get("/contacts", (request, response)=> {
    console.log(request.method);
    console.log(request.url);
    response.send("<h1>Contacts page</h1>");
})

app.listen(3000, (error) => {
    if(error) {
        return console.log(`Server not run. Error ${error.message}`);
    }
    console.log("Server running on 3000 PORT");
})