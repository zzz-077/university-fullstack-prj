import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    personalID: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
    },
    DOB: {
      type: Date,
      required: true,
    },
    POB: {
      type: String,
      required: true,
    },
    userID: {
      type: String,
      unique: true,
    },
    mobileNum: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: true,
    },
    enrolledYear: {
      type: Number,
      required: true,
    },
    graduatedYear: {
      type: Number,
      required: false,
    },
    faculty: {
      type: String,
      required: true,
    },
    facultyProgram: {
      type: String,
      required: true,
    },
    sector: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    positionID: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Students = mongoose.model("student", studentSchema, "students");

export default Students;
