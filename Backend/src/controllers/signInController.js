import Users from "../models/userModel.js";
import findUsersInCollection from "../utils/findUsersCollection.js";
import passwordCheck from "../validations/passwordCheck.js";

async function signInController(req, res) {
  var isPasswordMatch;
  const foundUser = await Users.find({ userID: req.body.userID });
  try {
    if (foundUser.length == 0)
      throw new Error("User not in the usersDatabase!");
    const foundUserData = await findUsersInCollection(
      foundUser[0],
      foundUser[0].positionID
    );
    if (foundUserData.length == 0)
      throw new Error("User not in the databases!");
    else {
      isPasswordMatch = await passwordCheck(
        foundUserData[0].password,
        req.body.password
      );
    }
    if (!isPasswordMatch) throw new Error("Password do not match!");
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
