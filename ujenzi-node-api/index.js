const express = require("express");
const cors = require("cors");
require('dotenv').config();


const app = express();

const  Routes  = require("./routes");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/v1", Routes)


const PORT = process.env.PORT || 5005;

app.listen(PORT, () => 
  console.log(`listening  on port ${PORT}....`)
);