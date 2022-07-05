const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const {errorHandler} = require('./middleware/errorMiddleWare');
const colors = require('colors');
const connectDB = require('./config/db');

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);

app.listen(port, () => console.log(`Server started at ${port}`));
