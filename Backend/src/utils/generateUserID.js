import Students from "../models/studentModel.js";
import Lecturers from "../models/lecturerModel.js";
import Admins from "../models/adminModel.js";
function setCount(count) {
  let formatted = "";
  for (let i = 0; i < 5 - count.length; i++) {
    formatted += "0";
  }
  formatted += count;
  return formatted;
}
async function generateID(position) {
  let generatedID = "";
  const currentYear = new Date().getFullYear();
  generatedID += currentYear % 100;
  generatedID += position;

  let count = 0;

  switch (position) {
    case 1:
      count = await Students.countDocuments();
      count++;
      generatedID += setCount(count.toString());
      break;
    case 2:
      count = await Lecturers.countDocuments();
      count++;
      generatedID += setCount(count.toString());
      break;
    case 3:
      count = await Admins.countDocuments();
      count++;
      generatedID += setCount(count.toString());
      break;
    default:
      throw new Error("Invalid positionID");
  }
  return generatedID;
}
export { generateID };
