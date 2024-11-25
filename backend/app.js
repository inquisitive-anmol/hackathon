const express = require("express");
const app = express();
const dotenv = require("dotenv");

const cookieParser = require("cookie-parser");
const cors = require("cors");
const bodyParsor = require("body-parser");
const fileUpload = require("express-fileupload");

const errorMiddleware = require("./middleware/error");

// Confige
dotenv.config();

const corsOptions = {
  origin: process.env.BASE_FRONTEND_URL,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "X-Requested-With",
    "X-File-Name",
  ],
  credentials: true,
};

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(bodyParsor.urlencoded({ extended: true }));
app.use(fileUpload());

// Route Imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoutes");
const order = require("./routes/orderRoute");
const payment = require("./routes/paymentRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", payment);

// Middleware for Errors

app.use(errorMiddleware);

module.exports = app;
