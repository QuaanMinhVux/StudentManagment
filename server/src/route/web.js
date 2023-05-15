let homeController = require("../controllers/HomeCotrollers.js");
let express = require("express");
let route = express.Router();

let initWebRoutes = (app) => {
  route.get("/api", homeController.getHome);
  route.post("/create", homeController.createStudent);
  route.put("/update", homeController.updateStudent);
  route.delete("/delete", homeController.deleteStudent);
  return app.use("/", route);
};
module.exports = {
  initWebRoutes: initWebRoutes,
};
