const express = require("express");
require("dotenv").config();

const app = express();

app.listen(3000, () =>
  console.log(
    `I am ${process.env.MY_NAME}, wilder in ${process.env.MY_CITY}, and i love ${process.env.MY_LANGUAGE}`
  )
);
