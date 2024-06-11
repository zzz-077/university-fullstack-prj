import {
  createStudent,
  createLecturer,
  createAdmin,
} from "../controllers/admin/addUser/addUserController.js";
async function createUserByPosition(userInfo, positionID) {
  switch (positionID) {
    case 1:
      await createStudent(userInfo);
      break;
    case 2:
      await createLecturer(userInfo);
      break;
    case 3:
      await createAdmin(userInfo);
      break;
    default:
      throw new Error("Invalid positionID");
  }
}
export { createUserByPosition };
