require ("dotenv").config();

const express = require("express");
const { connection } = require("./db");
const User = require("./models/user");
const errorRouter = require ("./routes/error");
const userRouter = require("./routes/user");
const app = express();

app.use(express.json());

app.use("/user", userRouter);
app.use("*", errorRouter); // useing error router here

app.listen(process.env.HTTP_Port || 5000, async ()=>{
    connection.authenticate();
    await User.sync({alter: true}); // creating tables
    console.log("HTTP Server Started");
});
