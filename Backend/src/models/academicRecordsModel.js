import mongoose from "mongoose";

const academiRecordsSchema = new mongoose.Schema(
  {
    userID: { type: String, require: true },
    subjectID: { type: String, require: true },
    subjectCode: { type: String, require: true },
    groupID: { type: String, require: true },
    classParicipation: {
      maxPoint: { type: Number, require: true },
      activePoint: { type: Number, require: true },
    },
    homework: {
      maxPoint: { type: Number, require: true },
      activePoint: { type: Number, require: true },
    },
    project: {
      maxPoint: { type: Number, require: true },
      activePoint: { type: Number, require: true },
    },
    midtermExam: {
      maxPoint: { type: Number, require: true },
      activePoint: { type: Number, require: true },
    },
    midtermMaxPoint: { type: Number, require: true },
  },
  { timestamps: true }
);

const academicRecord = mongoose.model(
  "",
  academiRecordsSchema,
  "academicRecords"
);
export default academicRecord;
