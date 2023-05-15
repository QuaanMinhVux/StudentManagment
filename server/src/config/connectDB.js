const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("StudentManagment", "root", "Quan02082001", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});
let checkDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
module.exports = { checkDB: checkDB };
