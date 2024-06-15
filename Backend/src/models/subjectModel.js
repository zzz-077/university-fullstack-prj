import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    code: {
      type: String,
      unique: true,
      require: true,
    },
    groups: [
      {
        groupNumber: {
          type: Number,
          require: true,
        },
        lecturer: {
          type: String,
          require: true,
        },
        lab: {
          type: String,
          require: true,
        },
        schedule: {
          weekDay: {
            type: String,
            require: true,
          },
          startTime: {
            type: String,
            require: true,
          },
          endTime: {
            type: String,
            require: true,
          },
        },
      },
    ],
  },
  { timestamps: true }
);

const Subject = mongoose.model("subject", subjectSchema, "subjects");
export default Subject;
