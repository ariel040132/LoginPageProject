const express = require("express");
const router = express.Router();
const userSchema = require("../../models/userSchema");

//! 首頁
router.get("/", (req, res) => {
  res.render("index");
});

//! 登入功能
router.post("/form", (req, res) => {
  const { userEmail, userPassword } = req.body;
  userSchema
    .findOne({ email: userEmail })
    .lean()
    .then((data) => {
      // ok－console.log("this is data: ", data);
      //信箱驗證
      if (!data) {
        return res.render("index", { wrongEmail: true });
      }
      //密碼驗證
      if (userPassword === data.password) {
        // ok－ console.log(data);
        res.render("new", { user: data });
      } else {
        res.render("index", { wrongPassword: true });
      }
    })
    .catch((err) => console.log(err));
});

//! 匯出
module.exports = router;
