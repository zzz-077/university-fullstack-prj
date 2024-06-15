import { getDataFromSubjectCollection } from "./GetSubjectController.js";
import academicRecord from "../../../models/academicRecordsModel.js";

async function adduserInAcademicRecordsCollection(reqBody, subjects) {
  const subjectData = await getDataFromSubjectCollection(subjects);
  // console.log("===LOG2===");
  // console.log(subjectData);
  try {
    if (subjectData.error) return subjectData;

    const userid = reqBody.userID;

    const academicRecords = [];

    subjectData.forEach((data, i) => {
      academicRecords.push({
        userID: userid,
        subjectID: data._id,
        subjectCode: data.code,
        groupID: subjects[i].groupNumber,
        classParticipation: {
          maxPoint: 0,
          activePoint: 0,
        },
        homework: {
          maxPoint: 0,
          activePoint: 0,
        },
        project: {
          maxPoint: 0,
          activePoint: 0,
        },
        midtermExam: {
          maxPoint: 0,
          activePoint: 0,
        },
        midtermMaxPoint: 0,
      });
    });
    academicRecord.insertMany(academicRecords);

    return {
      status: "success",
      message: "User's data added to academicRecords successfully",
      data: [academicRecords],
      errors: null,
    };
  } catch (error) {
    return {
      error: {
        status: 500,
        message: "An error occurred while fetching subjects!",
        details: error.message,
      },
    };
  }
}
export { adduserInAcademicRecordsCollection };
