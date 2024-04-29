import express from "express";

import movies from "./movies.js";

const app = express();

// app.set("json spaces", 4);

app.get("/movies", (req, res)=> {
    const databaseResponse = null;
    // res.json(databaseResponse);
    res.json(movies);
    // res.send(databaseResponse);
    // res.send(movies);
})

app.listen(3000, (error)=> {
    if(error) {
        return console.log(`Error ${error.message}`);
    }
    console.log("Server running on 3000 PORT");
})