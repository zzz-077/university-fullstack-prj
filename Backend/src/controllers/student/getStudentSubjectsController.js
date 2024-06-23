import academicRecord from "../../models/academicRecordsModel.js";

async function getStudentssubject(req, res) {
  const userID = req.body.userID;
  const findStudentSubjects = await academicRecord.find({ userID: userID });
  console.log(findStudentSubjects);
  try {
    if (findStudentSubjects)
      return res.status(404).json({
        status: "fail",
        message: "No subjects found!",
        errors: findStudentSubjects,
      });
    return res.status(200).json({
      status: "success",
      message: "No subjects found!",
      message: "Student's subjects found successfully!",
      errors: null,
      data: [findStudentSubjects],
    });
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: "Find student's subjects failed!",
      errors: error.message,
    });
  }
}

export default getStudentssubject;
