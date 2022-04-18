const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/jobpostdb")
  .then(() => console.log("Database connected"))
  .then((err) => console.error(err));
