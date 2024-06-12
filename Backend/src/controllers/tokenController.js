import jwt from "jsonwebtoken";
import { generateAccessToken } from "../utils/generateToken.js";
import { createAccessTokenCookie } from "../utils/cookieUtils.js";
const createAccessTokenWithRefreshToken = (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.sendStatus(403);
    }
    const accessToken = generateAccessToken(decoded.userID);

    createAccessTokenCookie(res, accessToken);
  });
};

export { createAccessTokenWithRefreshToken };
