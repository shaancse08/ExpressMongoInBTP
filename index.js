const express = require("express");
const app = express();
const mongoose = require("mongoose");
const usersRouter = require("./routes/users");
const port = process.env.PORT || 3000;

app.use(express.json())



app.use("/users", usersRouter)




app.listen(port, () => {
  console.log(`Server has started at http://localhost:3000`);
});
