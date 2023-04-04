const express = require("express");
const app = express();
require("dotenv").config;

app.get("/", () => {
  res.send("Ok");
});

app.listen(process.env.PORT, () => {
  console.log(`Listen on http://localhost:${process.env.PORT}`);
});
