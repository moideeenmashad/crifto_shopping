const Mongoose = require("mongoose");

const usersSchema = Mongoose.Schema({
  username: String,
  password: String,
});

const UserModal = Mongoose.model("Users", usersSchema);
module.exports = UserModal;
