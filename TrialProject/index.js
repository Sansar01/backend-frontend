const mongoose = require("mongoose");
const dotenv = require("dotenv");
const express = require("express");
const app = express();
const User = require("./user.js");

dotenv.config();

//connecting to mongodb

console.log(`connection string  ${process.env.MONGO_URI}`);

const connectDb = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/testing1`);
    console.log("successfully connected");

    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port: ${process.env.PORT}`);
    });

    const user = new User({
      name: "John Doe",
      email: "johndoe@example.com",
    });
    await user.save();
    console.log("user is saved to the db");
  } catch (error) {
    console.log(error);
  }
};

connectDb();
