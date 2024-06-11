import Users from "../models/userModel.js";
import findUsersInCollection from "../utils/findUsersCollection.js";
import passwordCheck from "../validations/passwordCheck.js";

async function signInController(req, res) {
  var isPasswordMatch;
  //checking user in usersCollection
  const foundUser = await Users.find({ userID: req.body.userID });
  try {
    if (!foundUser.length) throw new Error("User name is not correct!");
    //checking useres password in usersCollection if it match
    isPasswordMatch = await passwordCheck(
      foundUser[0].password,
      req.body.password
    );
    //checking user in specific Collection
    if (!isPasswordMatch) throw new Error("Password do not match!");
    const foundUserData = await findUsersInCollection(
      foundUser[0],
      foundUser[0].positionID
    );
    if (!foundUserData.length) throw new Error("User not in the databases!");

    return res.status(200).send(foundUserData);
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: "Data retrieval failed",
      errors: error.message,
    });
  }
}

export { signInController };
