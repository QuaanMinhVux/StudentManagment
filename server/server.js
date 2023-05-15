let express = require("express");
let route = require("./src/route/web.js");
let bodyParser = require("body-parser");
let config = require("./src/config/connectDB.js");
const path = require("path");
require("dotenv").config();

let app = express();
let port = process.env.PORT || 8080;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
route.initWebRoutes(app);
app.use("/", express.static(path.join(__dirname, "../client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});
config.checkDB();
app.listen(port, () => {
  console.log(`Back end NodeJS is running on port: ` + port);
});
