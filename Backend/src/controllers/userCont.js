import User from "../models/userModel";
const getAllUsers = (req, res) => {
  res.send("get reqest was sent!");
};
const createNewUsers = (req, res) => {
  const user = User.create(req.body);
  res.send(user);
};

export default {
  getAllUsers,
  createNewUsers,
};
