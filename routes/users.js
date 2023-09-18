const express = require("express");
const { getAllUsers } = require("../controllers/users");
const usersRouter = express.Router();

usersRouter.route("/").get(getAllUsers);


module.exports = usersRouter;