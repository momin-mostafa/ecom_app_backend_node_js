const express = require("express");
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRouter = require('./routes/users');
const authRouter = require("./routes/auth");

const app = express();
dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB connection succesfull"))
    .catch((err) => {
        console.log(err);
    });


app.use(express.json());
app.use("/api/user", authRouter);
app.use("/api/users", userRouter);


app.get("/", () => {
    console.log("Test is succesfull");
})


app.listen(process.env.PORT || 8080, () => {
    console.log("server running in port localhost:", process.env.PORT)
}) 