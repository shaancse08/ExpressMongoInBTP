const express = require("express");
const app = express();

const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://shaancse08:CBx6oiboM6fR8bOT@expressbtp.x4r8yav.mongodb.net/"
);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Db Connected Successfully"));

app.get("/", (req, res) => {
  res.send({ message: "Hello From Node Express" });
});

app.listen(3000, () => {
  console.log(`Server has started at http://localhost:3000`);
});
