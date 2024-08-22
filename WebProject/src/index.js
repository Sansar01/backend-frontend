// require('dotenv').config({path:'./env'})

// import mongoose from "mongoose"
// import {DB_NAME} from "./constant.js"
import dotenv from "dotenv";
import express from "express";
import connectDb from "./db/index.js";
import { app } from "./app.js";

// const app = express()

dotenv.config({
  path: "./env",
});

connectDb()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is running on port: ${process.env.PORT} `);
    });
  })
  .catch((err) => {
    console.log("Mongodb connection failed", err);
  });

// const connectDB = async()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

//         app.on("error",()=>{
//             console.log("error",error);
//             throw error
//         })

//         app.listen(process.env.PORT,()=>{
//             console.log(`App is listening on port ${process.env.PORT}`);

//         })
//     } catch (error) {
//         console.log("error",error);
//         throw err

//     }
// }
// connectDB();
