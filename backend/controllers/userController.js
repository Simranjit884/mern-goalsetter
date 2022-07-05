const asyncHandler = require("express-async-handler");

const getUsers = asyncHandler(async (req, res) => {
  res.status(200);
  res.json("get request for users");
});

module.exports = getUsers;
