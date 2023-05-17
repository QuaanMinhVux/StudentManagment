const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("by41szcksponu9frjnsy", "utla5g3t5dttzar7", "TxEKhMb9NUA1bZVHkV7t", {
  host: "by41szcksponu9frjnsy-mysql.services.clever-cloud.com",
  dialect: "mysql",
  port: 3306,
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
