const createAccessTokenCookie = (res, accessToken) => {
  res.cookie("accessToken", accessToken, {
    maxAge: 24 * 60 * 60 * 1000,
    httpOnly: true,
  });
};

const createRefreshTokenCookie = (res, refreshToken) => {
  res.cookie("refreshToken", refreshToken, {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  });
};

export { createAccessTokenCookie, createRefreshTokenCookie };
