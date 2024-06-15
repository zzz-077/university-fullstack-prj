import Subject from "../../../models/subjectModel.js";

async function getDataFromSubjectCollection(subjects) {
  const subjectCodes = subjects.map((subject) => ({
    code: subject.subjectCode,
    "groups.groupNumber": subject.groupNumber,
  }));
  const foundedSubjects = await Subject.find({ $or: subjectCodes });
  // console.log("===LOG1===");
  // console.log(foundedSubjects);
  try {
    if (foundedSubjects.length !== 0) return foundedSubjects;
    else {
      return {
        error: { status: 404, message: "subject not found!" },
      };
    }
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
export { getDataFromSubjectCollection };
// [
//     { code: 'CS137', "groups.groupNumber": 1 },
//     { code: 'CS116', "groups.groupNumber": 2 }
//   ]
