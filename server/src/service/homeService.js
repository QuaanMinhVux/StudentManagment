let dbContext = require("../models/index.js");

const getAll = async () => {
  return new Promise(async (reslove, reject) => {
    try {
      let students = await dbContext.Students.findAll({ raw: true });
      reslove(students);
    } catch (error) {
      reject(error);
    }
  });
};
const createStudent = async (user) => {
  return new Promise(async (reslove, reject) => {
    try {
      await dbContext.Students.create(user);
      console.log("create user successful");
      reslove();
    } catch (error) {
      reject(error);
    }
  });
};
const updateStudent = (user) => {
  return new Promise(async (resolve, reject) => {
    try {
      const student = await dbContext.Students.findOne({
        where: {
          id: user.id,
        },
        raw: true,
      });
      if (!student) {
        resolve({ message: "There is no student has id: " + user.id });
      } else {
        dbContext.Students.update(
          {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            updatedAt: Date.now(),
          },
          {
            where: {
              id: user.id,
            },
          }
        );
        console.log({ message: "Update successfull" });
      }
      resolve({ message: "Update successfull" });
    } catch (error) {
      reject(error);
    }
  });
};
const deleteStudent = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log(id);
      const student = await dbContext.Students.findOne({
        where: id,
        raw: true,
      });
      console.log(student);
      if (!student) {
        resolve({ message: "Student doesn't exist" });
      } else {
        await dbContext.Students.destroy({ where: id });
        resolve({ message: "Delete successfull" });
      }
    } catch (error) {
      reject(error);
    }
  });
};
module.exports = {
  getAll: getAll,
  createStudent: createStudent,
  updateStudent: updateStudent,
  deleteStudent: deleteStudent,
};
