import Users from "../models/userModel.js";

const getAllUsers = (req, res) => {
  const currentYear = new Date().getFullYear(); 
  const lastTwoDigits = currentYear % 100; 
  res.send(`Last two digits of the current year are: ${lastTwoDigits}`);
};

const createNewUsers = async (req, res) => {
  try {
    const user = await Users.create(req.body);
    res.status(201).send(user);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json("Internal Server Error");
  }
};

export { getAllUsers, createNewUsers };
