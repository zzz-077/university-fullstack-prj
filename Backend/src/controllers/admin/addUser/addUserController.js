import bcrypt from "bcrypt";
import Students from "../../../models/studentModel.js";
import Users from "../../../models/userModel.js";
import Lecturers from "../../../models/lecturerModel.js";
import Admins from "../../../models/adminModel.js";
import passwordValid from "../../../validations/passwordValidation.js";
import { createUserByPosition } from "../../../utils/createUserByPosition.js";
import { generateID } from "../../../utils/generateUserID.js";

async function createUser(req, res) {
  const { userInfo } = req.body;

  const isPasswordValid = passwordValid.passwordMatch(
    userInfo.password,
    req.body.passwordRepeat.password
  );
 
  try {
    if (!isPasswordValid) throw new Error("Password does not match!");

    await createUserByPosition(userInfo, userInfo.positionID);

    return res.status(201).json({
      status: "success",
      message: "User created successfully",
      errors: null,
    });
  } catch (error) {
    const statusCode = error.message === "Passwords do not match!" ? 400 : 500;
    res.status(statusCode).json({
      status: "fail",
      message: "User creation failed",
      errors: error.message,
    });
  }
}
 
async function createStudent(userInfo) {
  userInfo.userID = await generateID(userInfo.positionID);
  userInfo.password = await bcrypt.hash(userInfo.password, 10);
  await Students.create(userInfo);
  createUserInUsers(userInfo);
}

async function createLecturer(userInfo) {
  userInfo.userID = await generateID(userInfo.positionID);
  userInfo.password = await bcrypt.hash(userInfo.password, 10);
  await Lecturers.create(userInfo);
  createUserInUsers(userInfo);
}

async function createAdmin(userInfo) {
  userInfo.userID = await generateID(userInfo.positionID);
  userInfo.password = await bcrypt.hash(userInfo.password, 10);
  await Admins.create(userInfo);
  createUserInUsers(userInfo);
}

//create user in usersCollection
async function createUserInUsers(userInfo) {
  await Users.create({
    userID: userInfo.userID,
    password: userInfo.password,
    positionID: userInfo.positionID,
  });
}

export { createStudent, createLecturer, createAdmin, createUser };
