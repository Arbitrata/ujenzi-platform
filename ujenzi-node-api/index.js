const express = require("express");
const config = require("./config");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


const PORT = process.env.PORT || 5005;

app.listen(PORT, () => 
  console.log(`listening  on port ${PORT}....`)
);