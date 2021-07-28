var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require("cors");


var app = express();

const userRouter = require("./routes/User/UserRouter")

app.use(cors());
if(process.env.NODE_ENV === "development"){
  app.use(logger("dev"));
}
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use("/api-user", userRouter);

module.exports = app;
