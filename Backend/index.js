const Express = require("express");
const Mongoose = require("mongoose");
const Bodyparser = require("body-parser");
const Cors = require("cors");
const usersSchema = require("./Models/Users");
const app = new Express();

app.use(Bodyparser.json());
app.use(Bodyparser.urlencoded({ extended: true }));
app.use(Cors())
Mongoose.connect("mongodb+srv://newUser:r5fzu6adXhOYooQd@cluster0.nlmenre.mongodb.net/UserLogin?retryWrites=true&w=majority")

app.post("/login", async (req, res) => {
  console.log(req.body);
  const newUser = new UserModel(req.body);
  await newUser.save((error, data) => {
    if (error) {
      res.json({
        status: "error",
        Error: error,
      });
    } else {
      res.json({ status: "Success", data: data });
    }
  });
});

app.listen(3001, () => {
  console.log("Server Started");
});
