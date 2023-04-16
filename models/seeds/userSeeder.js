const db = require("../../config/mongoose");
const userSchema = require("../userSchema");
const users = require("../../users.json").users;

db.once("open", () => {
  console.log("mongodb connected!");
  userSchema
    .create(users)
    .then(() => {
      console.log("Users List done!");
      db.close();
    })
    .catch((err) => console.log(error));
});
