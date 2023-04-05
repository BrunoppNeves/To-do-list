const express = require("express");
const app = express();
require("dotenv").config({ path: ".env" });
const sequelize  = require("./Database/db-connect");

app.get("/", (req, res) => {
  res.send("Ok");
});

app.listen(process.env.PORT || 3001, () => {
  console.log(`Listen on http://localhost:${process.env.PORT}`);
});
