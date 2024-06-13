import academicRecord from "../../models/academicRecordsModel.js";

async function postAcademicRecords(req, res) {
  const academicRecordArr = await academicRecord.create(req.body);
  res.status(200).json(academicRecordArr);
}
async function getAcademicRecords(req, res) {
  const academicRecordArr = await academicRecord.find();
  res.status(200).json(academicRecordArr);
}

export { postAcademicRecords, getAcademicRecords };
