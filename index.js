const express = require("express");
const app = express();

const mongoose = require("mongoose");
require("dotenv").config();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server is running"));