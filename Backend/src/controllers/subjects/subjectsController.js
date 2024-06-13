import Subject from "../../models/subjectModel.js";

async function postSubjects(req, res) {
  const SubjectArr = await Subject.create(req.body);
  res.status(200).json(SubjectArr);
}
async function getSubjects(req, res) {
  const SubjectArr = await Subject.find();
  res.status(200).json(SubjectArr);
}

export { postSubjects, getSubjects };
