require("./config/db");
require("dotenv").config();
const express = require("express");
// const dotenv = require("dotenv");
const jobRouter = require("./routes/jobsRoutes");
const userRouter = require("./routes/userRoutes");
// const ErrorHandler = require("./Middlewares/Error");
const createError = require("http-errors")

// loading config
// dotenv.config({ path: "./config/config.env" });

const app = express();

app.use(express.json());

app.use("/", jobRouter);
app.use("/", userRouter);

//Global Error Handler
// app.use("/*", ErrorHandler);
app.use((req,res,next) => {
  next(createError(404, "Not Found"))
})

//handling Error
app.use((err,req,res,next) =>{
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status   || 500,
      message : err.message
    }
  });
});

const PORT = process.env.PORT || 9000;

app.listen(
  PORT,
  console.log(
    `💋 Server up and running in ${process.env.NODE_ENV} on port ${PORT}`
  )
);
