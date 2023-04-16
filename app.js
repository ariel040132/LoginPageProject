//! 加載工具區
const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./routes");
require("./config/mongoose");

//! app 設定
const app = express();
const port = 3000;
app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(routes);

//! 底部－監聽器
app.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});
