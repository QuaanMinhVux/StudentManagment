const db = require("../models/index.js");
const services = require("../service/homeService.js");

const getHome = async (req, res) => {
  let students = await services.getAll();
  res.json(students);
};
const createStudent = async (req, res) => {
  try {
    const user = req.body;
    services.createStudent(user);
    res.json({ message: "Create successfull" });
  } catch (error) {
    res.json(error);
  }
};
const updateStudent = async (req, res) => {
  try {
    const user = req.body;
    const message = await services.updateStudent(user);
    res.json(message);
  } catch (error) {
    res.json(error);
  }
};
const deleteStudent = async (req, res) => {
  try {
    const id = req.body;
    const message = await services.deleteStudent(id);
    res.json(message);
  } catch (error) {
    res.json(error);
  }
};
module.exports = {
  getHome: getHome,
  createStudent: createStudent,
  updateStudent: updateStudent,
  deleteStudent: deleteStudent,
};
