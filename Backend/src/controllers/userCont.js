import User from "../models/userModel.js";

const getAllUsers = (req, res) => {
  res.send("get request was sent!");
};

const createNewUsers = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).send(user);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).send("Internal Server Error");
  }
};

export { getAllUsers, createNewUsers };
