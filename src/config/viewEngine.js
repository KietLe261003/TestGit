const path = require("path"); //import module path vào biến path (path là module có sẵn của Node.js)
//Cấu hình view engine của ứng dụng
const express = require("express");

const configViewEngine = (app) => {
  //config template ejs view engine
  app.set("views", path.join("./src", "views")); // default views directory
  app.set("view engine", "ejs"); // ejs view engine defaults to browser
  //config static files
  app.use("/static", express.static(path.join("./src", "public"))); //static files
};

module.exports = configViewEngine; //export hàm configViewEngine cho file server.js sử dụng
