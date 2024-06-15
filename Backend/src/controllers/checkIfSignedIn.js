import jwt from "jsonwebtoken";

const checkIfSignedIn = async (req, res) => {
  const accessToken = req.cookies.accessToken || req.header("accessToken");
  if (!accessToken) {
    return res.json({ isAuthenticated: false });
  }

  await jwt.verify(
    accessToken,
    process.env.ACCESS_TOKEN_SECRET,
    (err, decoded) => {
      if (err) {
        return res.json({ isAuthenticated: false });
      }
      return res.json({ isAuthenticated: true, userID: decoded.userID });
    }
  );
};
export { checkIfSignedIn };
