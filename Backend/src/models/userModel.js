import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userID:{
      type:String,
      required:true,
      unique: true,
    },
    password:{
      type:String,
      required:true
    },
    positionID:{
      type:Number,
      required:true
    }
  }
);

const Users = mongoose.model("user", userSchema, "users");

export default Users;
