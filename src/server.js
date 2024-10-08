const express = require("express"); // app express
const app = express();
const slugify = require("slugify");
const configViewEngine = require("./config/viewEngine"); // import viewEngine từ bên config
const routes = require("./routes/web");
require("dotenv").config();
const port = process.env.PORT || 8888; // use env file for port numbers
const hostname = process.env.HOST_NAME; // hostname
console.log(__dirname);

//Khai báo route
app.use("/test", routes); //tham số đầu tiên tạo ra sư khác biệt giữa các route

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
//config template engine
configViewEngine(app);
