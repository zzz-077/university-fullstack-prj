import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  personalID: {
    type: String,
  },
  email: {
    type: String,
  },
  DOB: {
    type: Date,
  },
  POB: {
    type: String,
  },
  userID: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
  },
  mobileNum: {
    type: String,
  },
  password: {
    type: String,
  },
  enrolledYear: {
    type: Number,
  },
  graduatedYear: {
    type: Number,
  },
  faculty: {
    type: String,
  },
  facultyProgram: {
    type: String,
  },
  sector: {
    type: String,
  },
  image: {
    type: String,
  },
});

const User = mongoose.model("users", userSchema);

export default User;
