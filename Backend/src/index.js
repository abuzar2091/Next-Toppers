// require("dotenv").config({path: "./.env"});
// const { app } = require("./app.js");


import dotenv from "dotenv"
import connectDB from "./db/index.js";
dotenv.config({
    path: "./.env"
})

const port=process.env.PORT;
connectDB()
