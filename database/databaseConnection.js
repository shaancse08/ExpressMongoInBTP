const mongoose = require("mongoose");

const connectDatabase = async () => {
    mongoose.connect(
        "mongodb+srv://shaancse08:CBx6oiboM6fR8bOT@expressbtp.x4r8yav.mongodb.net/"
      );
      const db = mongoose.connection;
      db.on("error", (error) => console.error(error));
      db.once("open", () => console.log("Db Connected Successfully"));
}

module.exports = {
    connectDatabase
}