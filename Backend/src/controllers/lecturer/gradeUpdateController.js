import academicRecord from "../../models/academicRecordsModel.js";

async function updateGrades(req, res) {
  var request = req.body;
  // console.log("=====log1====");
  // console.log(request);
  const filter = {
    userID: request.userID,
    subjectID: request.subjectID,
    groupID: request.groupID,
  };
  const update = {
    $inc: {
      "homework.activePoint": request.homework,
      "project.activePoint": request.project,
      "midtermExam.activePoint": request.midtermExam,
    },
  };
  const options = { new: true };

  try {
    const updatedGardes = await academicRecord.findOneAndUpdate(
      filter,
      update,
      options
    );
    // console.log("=====log2====");
    // console.log(updatedGardes);
    if (!updatedGardes)
      return res.status(404).json({
        status: "fail",
        message: "Student's grades not found!",
        errors: updatedGardes,
      });
    else {
      return res.status(200).json({
        status: "success",
        message: "Student's grades updated successfully!",
        errors: null,
        data: {
          updatedGardes,
        },
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: "Student's grades update failed!",
      errors: error.message,
    });
  }
}

export default updateGrades;
