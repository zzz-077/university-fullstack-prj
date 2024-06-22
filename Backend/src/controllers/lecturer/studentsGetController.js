import academicRecord from "../../models/academicRecordsModel.js";

async function studentsGet(req, res) {
  const subject = {
    subjectID: req.body.subjectID,
    groupID: req.body.groupID,
    subjectCode: req.body.subjectCode,
  };
  try {
    if (subject.length === 0)
      return res.status(400).json({
        status: "fail",
        message: "Data request failed!",
        errors: error.message,
      });
    const findStudents = await academicRecord.find({ $or: subject });
    if (findStudents.length === 0)
      return res.status(404).json({
        status: "fail",
        message: "No students found!",
        errors: findStudents,
      });
    res.status(200).json({
      status: "success",
      message: "Students data recieved successfully",
      data: [findStudents],
      errors: null,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Students get failed!",
      errors: error.message,
    });
  }
}

export default studentsGet;
