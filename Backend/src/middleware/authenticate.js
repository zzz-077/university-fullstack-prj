import jwt from "jsonwebtoken";

const authenticate = (req, res, next) => {
  const accessToken = req.cookies.accessToken;


  if (!accessToken) {
    return res.sendStatus(401); 
  }

  jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.sendStatus(403); 
    }
    req.userID = decoded.userID; 
    next(); 
  });
};

export { authenticate };
